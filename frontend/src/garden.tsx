import React, { useEffect, useState } from 'react';
import './garden.css';

// Placeholder images - these would be replaced with actual images in production
import socialImage from './assets/intellectual.png';
import physicalImage from './assets/intellectual.png';
import spiritualImage from './assets/intellectual.png';
import intellectualImage from './assets/intellectual.png';

const Garden: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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
  const handleCreateGoal = () => {
    console.log('Create new goal clicked');
    // Implementation for creating a new goal would go here
  };

  // Function to handle clicking on a goal category
  const handleGoalClick = (category: string) => {
    console.log(`${category} goal clicked`);
    // Implementation for navigating to specific goal category would go here
  };

  // Determine if we should use a column layout for very small screens
  const useColumnLayout = windowWidth <= 480;

  return (
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
          {/* <img src={socialImage} alt="Social Goal" className="goal-image" /> */}
          <div className="goal-text">SOCIAL</div>
        </div>

        {/* Physical Goal */}
        <div
          className="goal-circle physical"
          onClick={() => handleGoalClick('physical')}
          role="button"
          aria-label="Physical Goals"
        >
          {/* <img src={physicalImage} alt="Physical Goal" className="goal-image" /> */}
          <div className="goal-text">PHYSICAL</div>
        </div>

        {/* Spiritual Goal */}
        <div
          className="goal-circle spiritual"
          onClick={() => handleGoalClick('spiritual')}
          role="button"
          aria-label="Spiritual Goals"
        >
          {/* <img src={spiritualImage} alt="Spiritual Goal" className="goal-image" /> */}
          <div className="goal-text">SPIRITUAL</div>
        </div>

        {/* Intellectual Goal */}
        <div
          className="goal-circle intellectual"
          onClick={() => handleGoalClick('intellectual')}
          role="button"
          aria-label="Intellectual Goals"
        >
          {/* <img src={intellectualImage} alt="Intellectual Goal" className="goal-image" /> */}
          <div className="goal-text">INTELLECTUAL</div>
        </div>
      </div>

      {/* Create New Goal Button */}
      <button className="create-goal-button" onClick={handleCreateGoal}>
        Create a new goal
      </button>

      {/* Menu Bar Placeholder - The actual MenuBar is rendered in App.tsx */}
      <div className="menu-bar-placeholder">
        {/* <img
          alt="Menu Bar"
          style={{ width: '100%', objectFit: 'contain' }}
        /> */}
      </div>
    </div>
  );
};

export default Garden;
