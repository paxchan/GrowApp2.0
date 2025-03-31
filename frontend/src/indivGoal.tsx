import React, { useEffect, useState } from 'react';
import './indivGoal.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import socialImage from './assets/social.png';
import physicalImage from './assets/physical.png';
import spiritualImage from './assets/spiritual.png';
import intellectualImage from './assets/intellectua.png';

// Map category to the correct image
const categoryImages: { [key: string]: string } = {
  social: socialImage,
  physical: physicalImage,
  spiritual: spiritualImage,
  intellectual: intellectualImage,
};

type Goal = {
  goal_id: number;
  title: string;
  level: number;
  category: string;
  weekdays: { dayName: string }[];
  reason: string;
};

const IndivGoal: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/Goal/category/${category}`
        );
        setGoals(response.data);
      } catch (err) {
        setError(
          'Could not load goals for this category. Make a goal for this category first.'
        );
      } finally {
        setLoading(false);
      }
    };

    if (category) fetchGoals();
  }, [category]);

  // Format weekdays to abbreviation (MWThS)
  // Format and sort weekdays to abbreviation (MWThS)
  const formatWeekdays = (weekdays: { dayName: string }[]) => {
    const abbreviations: { [key: string]: string } = {
      Monday: 'M',
      Tuesday: 'T',
      Wednesday: 'W',
      Thursday: 'Th',
      Friday: 'F',
      Saturday: 'S',
      Sunday: 'Su',
    };

    // Define the correct order of weekdays
    const weekdayOrder: string[] = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    // Sort the weekdays according to the correct order
    const sortedWeekdays = weekdays
      .slice() // Make a copy to avoid mutating original array
      .sort(
        (a, b) =>
          weekdayOrder.indexOf(a.dayName) - weekdayOrder.indexOf(b.dayName)
      );

    // Map to abbreviations and join them
    return sortedWeekdays.map((day) => abbreviations[day.dayName]).join('');
  };

  if (loading) return <div className="category-container">Loading...</div>;
  if (error)
    return (
      <div className="category-container">
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );

  const handleDeleteGoal = async (goalId: number) => {
    try {
      setDeleteLoading(goalId);
      // Call your API to delete the goal
      await axios.delete(`http://localhost:5000/api/Goal/${goalId}`);

      // Update the local state by removing the deleted goal
      setGoals(goals.filter((goal) => goal.goal_id !== goalId));
    } catch (err) {
      setError('Failed to delete the goal. Please try again.');
    } finally {
      setDeleteLoading(null);
    }
  };

  return (
    <div className="category-container">
      <button
        className="back-button"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1); // Go back if possible
          } else {
            navigate('/garden'); // Go to Garden if no history
          }
        }}
        style={{ position: 'absolute', left: '20px', top: '20px', zIndex: 10 }}
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

      <div className="goal-image-container">
        <img
          src={categoryImages[category || 'social']}
          alt={`${category} Goal`}
          className="goal-image"
        />
      </div>

      <div className="goal-list-container">
        {goals.map((goal) => (
          <div key={goal.goal_id} className="goal-card">
            {/* Title and Days Inline */}
            <div className="goal-header">
              <h3 className="goal-title">{goal.title}</h3>
              <p className="goal-days">{formatWeekdays(goal.weekdays)}</p>
            </div>

            <p className="goal-level">
              <i>Level {goal.level}</i>
            </p>
            <p className="goal-reason">Why: {goal.reason}</p>

            <div className="goal-button-group">
              <button className="goal-action-button">Post</button>
              <button className="goal-action-button">Friends</button>
              <button
                className="edit-goal-button"
                onClick={() => navigate(`/editGoal/${goal.goal_id}`)}
              >
                Edit
              </button>
              <button
                className="delete-goal-button"
                onClick={() => handleDeleteGoal(goal.goal_id)}
                disabled={deleteLoading === goal.goal_id}
              >
                {deleteLoading === goal.goal_id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="add-goal-button" onClick={() => navigate('/goal')}>
        Add New Goal
      </button>
    </div>
  );
};

export default IndivGoal;
