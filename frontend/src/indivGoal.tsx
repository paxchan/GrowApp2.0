import React from 'react';
import './indivGoal.css';
import { useNavigate } from 'react-router-dom';

const SocialCategory: React.FC = () => {
  const navigate = useNavigate();

  const goals = [
    'Call a friend',
    'Attend a social event',
    'Compliment someone',
  ];

  return (
    <div className="category-container">
      {/* Title */}
      <h1 className="category-title">Social</h1>

      {/* Category icon/circle PLACEHOLDER */}
      <div className="category-circle">
        <div className="goal-text">SOCIAL</div>
      </div>

      {/* Level */}
      <div className="category-level-label">Level 1</div>

      {/* Goals list inside styled container */}
      <div className="goal-list-container">
        <h2>Your Goals</h2>
        <div className="goal-list-divider" />
        <ul className="goal-items">
          {goals.map((goal, idx) => (
            <li key={idx} className="goal-item">
              {goal}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button className="add-goal-button" onClick={() => navigate('/goal')}>
        Add New Goal
      </button>
    </div>
  );
};

export default SocialCategory;
