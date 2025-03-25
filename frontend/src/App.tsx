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
import IndivGoal from './indivGoal'

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
        <Route path="/goal" element={<GoalForm/>} />
        <Route path="/indivGoal" element={<IndivGoal/>}/>
      </Routes>
    </Router>
  );
}

export default App;
