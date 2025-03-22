import React, { CSSProperties, useState } from 'react';
import './App.css';

function CreateGoal() {
  const [goalDescription, setGoalDescription] = useState('');
  const [section, setSection] = useState('Physical');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const goalData = {
      goalDescription,
      section,
      endDate,
      reason,
    };

    try {
      const response = await fetch('https://localhost:5000/api/Goal', {
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

  // SVG components
  const ChevronDownIcon = () => (
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
  );

  return (
    <div style={styles.view1}>
      <div style={styles.view7}>
        <div style={styles.view8}>
          <h1 style={styles.headerText}>Create a Goal</h1>
        </div>
        <div style={styles.view9}>
          <form onSubmit={handleSubmit} style={styles.view10}>
            <div style={styles.view11}>
              <div style={styles.view12}>
                <label htmlFor="goalDescription" style={styles.labelText}>
                  What is your goal?
                </label>
              </div>
              <div style={styles.view13}>
                <input
                  id="goalDescription"
                  type="text"
                  placeholder="Describe"
                  value={goalDescription}
                  onChange={(e) => setGoalDescription(e.target.value)}
                  style={styles.inputField}
                />
              </div>
            </div>
            <div style={styles.view14}>
              <div style={styles.view15}>
                <label htmlFor="section" style={styles.labelText}>
                  Section?
                </label>
              </div>
              <div style={styles.view16}>
                <div style={styles.view17}>
                  <select
                    id="section"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    style={styles.selectField}
                  >
                    <option value="Physical">Physical</option>
                    <option value="Mental">Mental</option>
                    <option value="Social">Social</option>
                    <option value="Financial">Financial</option>
                  </select>
                </div>
                <div style={styles.iconContainer}>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>
            <div style={styles.view18}>
              <div style={styles.view19}>
                <label htmlFor="endDate" style={styles.labelText}>
                  End date
                </label>
              </div>
              <div style={styles.view20}>
                <div style={styles.view21}>
                  <input
                    id="endDate"
                    type="text"
                    placeholder="MM/DD/YYYY"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    style={styles.inputField}
                  />
                </div>
                <div style={styles.iconContainer}>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>
            <div style={styles.view22}>
              <div style={styles.view23}>
                <label htmlFor="reason" style={styles.labelText}>
                  Why do you want to achieve this?
                </label>
              </div>
              <div style={styles.view24}>
                <textarea
                  id="reason"
                  placeholder="Reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  style={styles.textareaField}
                />
              </div>
            </div>
            <div style={styles.view25}>
              <button type="submit" style={styles.button1}>
                Make Goal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  view1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E6EBE4',
    minHeight: '100vh',
    maxWidth: '480px',
    margin: '0 auto',
  },
  view2: {
    display: 'flex',
    width: '100%',
    height: '50px',
    backgroundColor: '#A8BAA2',
    alignItems: 'center',
  },
  view3: {
    display: 'flex',
    width: '100%',
    height: '50px',
    paddingTop: '21px',
    alignItems: 'flex-start',
    backgroundColor: '#A8BAA2',
  },
  view4: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  view5: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '22px',
    paddingLeft: '16px',
    paddingRight: '6px',
  },
  timeText: {
    margin: 0,
  },
  view6: {
    display: 'flex',
    width: '124px',
    height: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarIcons: {
    display: 'flex',
    paddingRight: '16px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view7: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '52px',
    paddingRight: '52px',
    marginTop: '54px',
  },
  view8: {
    marginBottom: '40px',
  },
  headerText: {
    color: '#000',
    fontFamily: '"Lilita One", system-ui, -apple-system, sans-serif',
    fontSize: '64px',
    lineHeight: 1.5,
    margin: 0,
    fontWeight: 'normal',
  },
  view9: {
    backgroundColor: '#D9D9D9',
    borderRadius: '36px',
    padding: '24px',
    width: '100%',
    maxWidth: '312px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  view10: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  view11: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  view12: {
    color: '#1E1E1E',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    lineHeight: '140%',
  },
  labelText: {
    margin: 0,
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    lineHeight: '140%',
    color: '#1E1E1E',
  },
  view13: {
    color: '#B3B3B3',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    minHeight: '40px',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
  },
  inputField: {
    width: '100%',
    height: '100%',
    padding: '12px 16px',
    color: '#B3B3B3',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    boxSizing: 'border-box',
  },
  view14: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  view15: {
    color: '#1E1E1E',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    lineHeight: '140%',
  },
  view16: {
    display: 'flex',
    height: '40px',
    paddingLeft: '16px',
    paddingRight: '16px',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
  },
  view17: {
    color: '#B3B3B3',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    width: '100%',
  },
  selectField: {
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#B3B3B3',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    outline: 'none',
    appearance: 'none',
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view18: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  view19: {
    color: '#1E1E1E',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    lineHeight: '140%',
  },
  view20: {
    display: 'flex',
    height: '40px',
    paddingLeft: '16px',
    paddingRight: '16px',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
  },
  view21: {
    color: '#B3B3B3',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    width: '100%',
  },
  view22: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  view23: {
    color: '#1E1E1E',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    lineHeight: '140%',
  },
  view24: {
    color: '#B3B3B3',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    minHeight: '80px',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
  },
  textareaField: {
    width: '100%',
    height: '100%',
    minHeight: '80px',
    padding: '12px 16px',
    color: '#B3B3B3',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    resize: 'none',
    boxSizing: 'border-box',
  },
  view25: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25px',
  },
  button1: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    color: '#F5F5F5',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: '16px',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CreateGoal;
