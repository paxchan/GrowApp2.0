import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './goal.css';

const GoalForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [reason, setReason] = useState('');
  const navigate = useNavigate();
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const handleDaySelection = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const goalData = {
      user_id: 1, // 🔥 temporarily hardcoded
      title,
      category,
      reason,
      weekdays: selectedDays.map((day) => ({ dayName: day })),
    };

    try {
      const response = await fetch('/api/Goal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(goalData),
      });

      if (response.ok) {
        console.log('Goal created successfully!');
        navigate('/garden'); // ✅ Only navigate after success
      } else {
        console.error('Failed to create goal:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
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
        <h1>Create a Goal</h1>
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
              {weekdays.map((day, index) => (
                <button
                  key={day}
                  type="button"
                  className={`weekday-btn ${selectedDays.includes(day) ? 'selected' : ''}`}
                  onClick={() => handleDaySelection(day)}
                >
                  {day.charAt(0)}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group button-container">
            <button type="submit" className="submit-button">
              Make Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalForm;
