import React, { useEffect, useState } from 'react';
import './garden.css';
import { useNavigate } from 'react-router-dom';
import MenuBar from './menuBar'; // adjust path if needed

// Placeholder images - these would be replaced with actual images in production
import socialImage from './assets/social.png';
import physicalImage from './assets/physical.png';
import spiritualImage from './assets/spiritual.png';
import intellectualImage from './assets/intellectua.png';

const Garden: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const navigate = useNavigate();

  // Add window resize listener for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle creating a new goal
  // const handleCreateGoal = () => {
  //   console.log('Create new goal clicked');
  //   // Implementation for creating a new goal would go here
  // };

  // Function to handle clicking on a goal category
  const handleGoalClick = (category: string) => {
    navigate(`/goal/${category}`);
  };

  // Determine if we should use a column layout for very small screens
  const useColumnLayout = windowWidth <= 480;

  return (
    <div className="app-with-menu">
      {' '}
      {/* ⬅️ Adds bottom padding */}
      <div className="garden-container">
        {/* Garden Title */}
        <h1 className="garden-title">Your Goals</h1>

        {/* Goals Container */}
        <div className={`goals-grid ${useColumnLayout ? 'column-layout' : ''}`}>
          {/* Social Goal */}
          <div
            className="goal-circle social"
            onClick={() => handleGoalClick('social')}
            role="button"
            aria-label="Social Goals"
          >
            <div className="circle-wrapper">
              <img src={socialImage} alt="Description" />
            </div>
          </div>

          {/* Physical Goal */}
          <div
            className="goal-circle physical"
            onClick={() => handleGoalClick('physical')}
            role="button"
            aria-label="Physical Goals"
          >
            <div className="circle-wrapper">
              <img src={physicalImage} alt="Description" />
            </div>
          </div>

          {/* Spiritual Goal */}
          <div
            className="goal-circle spiritual"
            onClick={() => handleGoalClick('spiritual')}
            role="button"
            aria-label="Spiritual Goals"
          >
            <div className="circle-wrapper">
              <img src={spiritualImage} alt="Description" />
            </div>
          </div>

          {/* Intellectual Goal */}
          <div
            className="goal-circle intellectual"
            onClick={() => handleGoalClick('intellectual')}
            role="button"
            aria-label="Intellectual Goals"
          >
            <div className="circle-wrapper">
              <img src={intellectualImage} alt="Description" />
            </div>
          </div>
        </div>

        {/* Create New Goal Button */}
        <button
          className="create-goal-button"
          onClick={() => navigate('/goal')}
        >
          Make a new goal
        </button>
      </div>
      {/* ✅ Bottom App Bar */}
      <MenuBar />
    </div>
  );
};

export default Garden;
