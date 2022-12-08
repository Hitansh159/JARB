import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home'
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
        <Route path="/generated" element={<GenratedPage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
