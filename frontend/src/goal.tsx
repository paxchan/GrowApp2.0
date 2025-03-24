import React, { useState } from 'react';
import './goal.css';

const GoalForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [reason, setReason] = useState('');

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
    // Handle form submission logic here
    const goalData = {
      title,
      category,
      reason,
      weekdays: selectedDays.map((day) => ({ dayName: day })),
    };

    try {
      const response = await fetch('https://localhost:5000/Goal/CreateGoal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(goalData),
      });

      if (response.ok) {
        console.log('Goal created successfully!');
      } else {
        console.error('Failed to create goal:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="goal-container">
      <div className="goal-header">
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
            <div className="checkbox-group">
              {weekdays.map((day) => (
                <label key={day}>
                  <input
                    type="checkbox"
                    value={day}
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDaySelection(day)}
                  />
                  {day}
                </label>
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
