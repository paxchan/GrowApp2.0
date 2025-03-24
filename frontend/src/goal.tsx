import React, { useState } from 'react';
import './goal.css';

const GoalForm: React.FC = () => {
  const [goalTitle, setGoalTitle] = useState('');
  const [section, setSection] = useState('');
  const [frequency, setFrequency] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const goalData = {
      goalTitle,
      section,
      reason,
      frequency,
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
            <label htmlFor="goalDescription">What is your goal?</label>
            <input
              type="text"
              id="goalDescription"
              placeholder="Describe"
              value={goalTitle}
              onChange={(e) => setGoalTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="section">Section?</label>
            <div className="select-wrapper">
              <select
                id="section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="" disabled selected>
                  Select an option below
                </option>
                <option value="physical">Physical</option>
                <option value="mental">Intellectual</option>
                <option value="social">Social</option>
                <option value="financial">Spiritual</option>
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
            <label htmlFor="frequency">How often is your goal?</label>
            <input
              type="text"
              id="frequency"
              placeholder="How often do you want to do this goal?"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
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
