import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './schedule.css';
import { format, addDays, startOfToday } from 'date-fns';
import MenuBar from './menuBar';

interface Goal {
  goal_id: number;
  title: string;
  level: number;
  category: string;
  weekdays: { dayName: string }[];
}

interface DayGoalGroup {
  date: Date;
  goals: Goal[];
}

const Schedule: React.FC = () => {
  const [allGoals, setAllGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [schedule, setSchedule] = useState<DayGoalGroup[]>([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/Goal');
        setAllGoals(response.data);
      } catch (err) {
        setError('Could not load goals.');
      } finally {
        setLoading(false);
      }
    };
    fetchGoals();
  }, []);

  useEffect(() => {
    const today = startOfToday();
    const upcomingDays: DayGoalGroup[] = [];

    for (let i = 0; i < 30; i++) {
      const day = addDays(today, i);
      const dayName = format(day, 'EEEE');

      const goalsForDay = allGoals.filter((goal) =>
        goal.weekdays?.some((wd) => wd.dayName === dayName)
      );

      if (goalsForDay.length > 0) {
        upcomingDays.push({ date: day, goals: goalsForDay });
      }
    }

    setSchedule(upcomingDays);
  }, [allGoals]);

  if (loading) return <div className="schedule-container">Loading...</div>;
  if (error) return <div className="schedule-container">{error}</div>;

  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Your Schedule</h1>
      {schedule.map((dayGroup) => (
        <div key={dayGroup.date.toISOString()} className="day-group">
          <div className="day-header">
            <div className="day-name">
              {format(dayGroup.date, 'EEE').toUpperCase()}
            </div>
            <div className="day-number">{format(dayGroup.date, 'd')}</div>
          </div>
          <div className="goals-list">
            {dayGroup.goals.map((goal) => (
              <div
                key={goal.goal_id}
                className={`goal-block ${goal.category.toLowerCase()}`}
              >
                <input type="checkbox" className="goal-checkbox" />
                <div className="goal-details">
                  <div className="goal-title">{goal.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <MenuBar />
    </div>
  );
};

export default Schedule;
