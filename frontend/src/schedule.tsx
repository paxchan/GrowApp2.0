import React, { useEffect, useState } from 'react';
import { addDays, format, startOfToday } from 'date-fns';

type Goal = {
  goal_id: number;
  title: string;
  start_date: string;
  end_date: string;
  frequency: number;
};

type DaySchedule = {
  date: Date;
  goals: Goal[];
};

function Schedule() {
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    fetchGoals(); // fetch from your API
  }, []);

  useEffect(() => {
    if (goals.length > 0) {
      const mappedSchedule = mapGoalsToSchedule(goals);
      setSchedule(mappedSchedule);
    }
  }, [goals]);

  const fetchGoals = async () => {
    const res = await fetch('/api/goals'); // adjust route if needed
    const data = await res.json();
    setGoals(data);
  };

  const mapGoalsToSchedule = (goals: Goal[]): DaySchedule[] => {
    const today = startOfToday();
    const days: DaySchedule[] = [];

    for (let i = 0; i < 31; i++) {
      const current = addDays(today, i);
      days.push({ date: current, goals: [] });
    }

    for (const goal of goals) {
      const frequency = goal.frequency;
      let added = 0;

      for (let i = 0; i < 7 && added < frequency; i++) {
        const d = addDays(today, i);
        days
          .find(
            (day) => format(day.date, 'yyyy-MM-dd') === format(d, 'yyyy-MM-dd')
          )
          ?.goals.push(goal);
        added++;
      }
    }

    return days;
  };

  return (
    <div className="schedule-container">
      <h2>Scheduled</h2>
      {schedule.map((day, i) => (
        <div key={i} className="day-row">
          <div className="day-label">
            <strong>{format(day.date, 'dd')}</strong> {format(day.date, 'EEE')}
          </div>
          <div className="day-goals">
            {day.goals.map((goal) => (
              <div key={goal.goal_id} className="goal-entry">
                {goal.title}
              </div>
            ))}
            <button className="add-goal-button">+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Schedule;
