import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './goal.css';

interface Goal {
  goal_id: number;
  user_id: number;
  level: number;
  title: string;
  category: string;
  reason: string;
  weekdays: { dayName: string }[];
}

const EditGoal: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [reason, setReason] = useState('');
  const [level, setLevel] = useState<number>(1); // Default to 1 or any other value
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const weekdayMapping = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Fetch goal data when editing
  useEffect(() => {
    if (id) {
      const fetchGoal = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/Goal/${id}`);
          if (!response.ok) {
            throw new Error('Goal not found');
          }
          const goal: Goal = await response.json();
          setTitle(goal.title);
          setCategory(goal.category);
          setReason(goal.reason);
          setLevel(goal.level);
          setSelectedDays(goal.weekdays.map((day) => day.dayName));
        } catch (error) {
          console.error('Error fetching goal:', error);
          // Redirect to some error page or show a message
          navigate('/garden');
        }
      };

      fetchGoal();
    }
  }, [id, navigate]);

  const handleDaySelection = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const goalId = id ? parseInt(id, 10) : null;
    if (!goalId) {
      console.error('No goal ID found in URL');
      return;
    }

    const updatedGoal = {
      goal_id: goalId,
      title,
      category,
      level,
      reason,
      weekdays: selectedDays.map((day, index) => ({
        weekdayId: index,
        goalId: goalId,
        dayName: day,
      })),
    };

    try {
      const response = await fetch(`http://localhost:5000/api/Goal/${goalId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGoal),
      });

      if (!response.ok) {
        throw new Error('Failed to update goal');
      }

      console.log('Goal updated successfully!');

      // ✅ Navigate to '/garden' after successful update
      navigate(-1);
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  return (
    <div className="goal-container">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        style={{ position: 'absolute', left: '20px', top: '20px' }} // Inline styles here
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="goal-header-2">
        <h1>Edit Goal</h1>
      </div>
      <div className="goal-form-container">
        <form className="goal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">What is your goal?</label>
            <input
              type="text"
              id="title"
              placeholder="Describe"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="section">Category?</label>
            <div className="select-wrapper">
              <select
                id="section"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled selected>
                  Select an option below
                </option>
                <option value="physical">Physical</option>
                <option value="intellectual">Intellectual</option>
                <option value="social">Social</option>
                <option value="spiritual">Spiritual</option>
              </select>
              <div className="select-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#1E1E1E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="reason">Why do you want to achieve this?</label>
            <textarea
              id="reason"
              placeholder="Reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Which days are you working on your goal?</label>

            <div className="weekdays-container">
              {weekdayMapping.map((day: string, index: number) => (
                <button
                  key={day}
                  type="button"
                  className={`weekday-btn ${
                    selectedDays.includes(day) ? 'selected' : ''
                  }`}
                  onClick={() => handleDaySelection(day)}
                >
                  {day.charAt(0)}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group button-container">
            <button type="submit" className="submit-button">
              Update Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGoal;
