import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './menuBar.css';

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="menu-bar">
      <div
        className={`menu-item ${isActive('/profile') ? 'active' : ''}`}
        onClick={() => navigate('/profile')}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_463_10)">
            <path
              d="M14.6667 18.0128V16.3462C14.6667 15.4621 14.3155 14.6142 13.6904 13.9891C13.0652 13.364 12.2174 13.0128 11.3333 13.0128H4.66668C3.78262 13.0128 2.93478 13.364 2.30965 13.9891C1.68453 14.6142 1.33334 15.4621 1.33334 16.3462V18.0128M19.6667 18.0128V16.3462C19.6661 15.6076 19.4203 14.8901 18.9678 14.3064C18.5153 13.7227 17.8818 13.3058 17.1667 13.1212M13.8333 3.12115C14.5504 3.30473 15.1859 3.72173 15.6397 4.30641C16.0935 4.89108 16.3399 5.61018 16.3399 6.35032C16.3399 7.09046 16.0935 7.80955 15.6397 8.39423C15.1859 8.9789 14.5504 9.3959 13.8333 9.57948M11.3333 6.34615C11.3333 8.1871 9.84096 9.67948 8.00001 9.67948C6.15906 9.67948 4.66668 8.1871 4.66668 6.34615C4.66668 4.5052 6.15906 3.01282 8.00001 3.01282C9.84096 3.01282 11.3333 4.5052 11.3333 6.34615Z"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_463_10">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5 0.512817)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
        className={`menu-item ${isActive('/garden') ? 'active' : ''}`}
        onClick={() => navigate('/garden')}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_463_17)">
            <path
              d="M10.5 1.34615V3.01281M10.5 18.0128V19.6795M4.01668 4.02948L5.20001 5.21281M15.8 15.8128L16.9833 16.9961M1.33334 10.5128H3.00001M18 10.5128H19.6667M4.01668 16.9961L5.20001 15.8128M15.8 5.21281L16.9833 4.02948M14.6667 10.5128C14.6667 12.814 12.8012 14.6795 10.5 14.6795C8.19882 14.6795 6.33334 12.814 6.33334 10.5128C6.33334 8.21163 8.19882 6.34615 10.5 6.34615C12.8012 6.34615 14.6667 8.21163 14.6667 10.5128Z"
              stroke="#F5F5F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_463_17">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5 0.512817)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
        className={`menu-item ${isActive('/feed') ? 'active' : ''}`}
        onClick={() => navigate('/feed')}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8333 10.5128C18.8333 15.1152 15.1024 18.8462 10.5 18.8462M18.8333 10.5128C18.8333 5.91045 15.1024 2.17949 10.5 2.17949M18.8333 10.5128H2.16666M10.5 18.8462C5.89762 18.8462 2.16666 15.1152 2.16666 10.5128M10.5 18.8462C12.5844 16.5642 13.769 13.6028 13.8333 10.5128C13.769 7.42285 12.5844 4.46145 10.5 2.17949M10.5 18.8462C8.41559 16.5642 7.23103 13.6028 7.16666 10.5128C7.23103 7.42285 8.41559 4.46145 10.5 2.17949M2.16666 10.5128C2.16666 5.91045 5.89762 2.17949 10.5 2.17949"
            stroke="#F5F5F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className={`menu-item ${isActive('/') ? 'active' : ''}`}
        onClick={() => navigate('/')}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 18.8462V10.5128H13V18.8462M3 8.01282L10.5 2.17949L18 8.01282V17.1795C18 17.6215 17.8244 18.0454 17.5118 18.358C17.1993 18.6706 16.7754 18.8462 16.3333 18.8462H4.66667C4.22464 18.8462 3.80072 18.6706 3.48816 18.358C3.17559 18.0454 3 17.6215 3 17.1795V8.01282Z"
            stroke="#F5F5F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default MenuBar;
