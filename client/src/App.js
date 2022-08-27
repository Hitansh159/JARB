import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home'
import Profile from './pages/Profile';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ResumesGenerated from './pages/ResumesGenerated';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />}></Route>
      <Route path="resumesgenetated" element={<ResumesGenerated />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="signin" element={<SignIn />}></Route>      
      <Route path="generate" element={<HomePage />}></Route>
    </Routes>
  );

}

export default App;
