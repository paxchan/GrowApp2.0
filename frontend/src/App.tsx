import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import LogIn from './logIn';
import SignUp from './signUp';
import Garden from './garden';
import GoalForm from './goal';
import IndivGoal from './indivGoal';
import EditGoal from './editGoal';
import Schedule from './schedule';
import Feed from './feed';
import Profile from './profile';

// Wrapper component to conditionally render content
// const AppLayout = () => {
//   const location = useLocation();

//   return (
//     <div className="app">
//       <Routes>
//         <Route path="/" element={<LogIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/garden" element={<Garden />} />
//         <Route path="/goal" element={<GoalForm/>} />
//       </Routes>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/goal" element={<GoalForm />} />
        <Route path="/goal/:category" element={<IndivGoal />} />
        <Route path="/editGoal/:goalId" element={<EditGoal />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
