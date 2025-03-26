import React, { useEffect, useState } from 'react';
import './indivGoal.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

type Goal = {
  goal_id: number;
  title: string;
  level: number;
  category: string;
  // add any other fields you need
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
        setError('Could not load goals for this category.');
      } finally {
        setLoading(false);
      }
    };

    if (category) fetchGoals();
  }, [category]);

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
      <div className="category-header-wrapper">
        <button className="back-button" onClick={() => navigate(-1)}>
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

        <h1 className="category-title">{category?.toUpperCase()} Goals</h1>
      </div>

      <div className="category-circle">
        <div className="goal-text">{category?.toUpperCase()}</div>
      </div>

      <div className="goal-list-container">
        <h2>Your Goals</h2>
        <div className="goal-list-divider" />
        <ul className="goal-items">
          {goals.map((goal) => (
            <li key={goal.goal_id} className="goal-item">
              <div className="goal-content">
                <span>{goal.title}</span>
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
            </li>
          ))}
        </ul>
      </div>

      <button className="add-goal-button" onClick={() => navigate('/goal')}>
        Add New Goal
      </button>
    </div>
  );
};

export default IndivGoal;
