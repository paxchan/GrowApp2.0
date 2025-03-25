import { useState } from 'react';
import './logIn.css'; // reuse same styles for now
import logo from './assets/bd22e7ff9f8c7a28ab7cfad65ed8a671.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up with:', {
      username,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={logo} alt="Grou Logo" className="logo" />
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSignUp}>
            <div className="input-group">
              <div className="input-wrapper">
                {/* Username Icon */}
                <svg className="input-icon" width="20" height="20" /* ... */>
                  ...
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
                {/* Email Icon (can reuse username icon for now) */}
                <svg className="input-icon" width="20" height="20" /* ... */>
                  ...
                </svg>
                <input
                  type="email"
                  placeholder="Email"
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                {/* Password Icon */}
                <svg className="input-icon" width="20" height="20" /* ... */>
                  ...
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

            <div className="input-group">
              <div className="input-wrapper">
                {/* Confirm Password Icon */}
                <svg className="input-icon" width="20" height="20" /* ... */>
                  ...
                </svg>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="login-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="login-button" onClick={() => navigate('/')}>
              Sign Up
            </button>

            <div className="signup-link">
              <span>Already have an account? </span>
              <Link to="/">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
