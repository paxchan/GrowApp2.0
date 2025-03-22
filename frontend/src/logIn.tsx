import { useState } from 'react';
import './logIn.css';
import logo from './assets/logo.svg';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', username, password);
  };

  const handleSignUp = () => {
    // Handle navigation to sign up page
    console.log('Navigate to sign up page');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={logo} alt="Grou Logo" className="logo" />
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <div className="input-wrapper">
                <svg
                  className="input-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66666C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 10 9.16667C8.15905 9.16667 6.66666 7.67428 6.66666 5.83333C6.66666 3.99238 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z"
                    stroke="#1E1E1E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Username"
                  className="login-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <svg
                  className="input-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83333 9.16669V5.83335C5.83333 4.72828 6.27232 3.66848 7.05372 2.88708C7.83512 2.10567 8.89493 1.66669 10 1.66669C11.1051 1.66669 12.1649 2.10567 12.9463 2.88708C13.7277 3.66848 14.1667 4.72828 14.1667 5.83335V9.16669M4.16667 9.16669H15.8333C16.7538 9.16669 17.5 9.91288 17.5 10.8334V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V10.8334C2.5 9.91288 3.24619 9.16669 4.16667 9.16669Z"
                    stroke="#1E1E1E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="login-button">
              Log In
            </button>
            <div className="signup-link">
              <span>Don't have an account? </span>
              <a onClick={handleSignUp}>Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
