import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import GenratedPage from './pages/Genrated';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/generated" element={<GenratedPage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
