import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import LogIn from './logIn';
import SignUp from './signUp';
import MenuBar from './menuBar';
// import Garden from './garden';

// Wrapper component to conditionally render MenuBar
const AppLayout = () => {
  const location = useLocation();
  const hideMenuBar = ['/signup', '/'].includes(location.pathname);

  return (
    <div className={`app ${!hideMenuBar ? 'app-with-menu' : ''}`}>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/garden" element={<Garden />} /> */}
      </Routes>
      {!hideMenuBar && <MenuBar />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
