import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import DriftPage from './DriftPage/DriftPage';
import TimeAttackPage from './TimeAttackPage/TimeAttackPage';
import ForzaPage from './ForzaPage/ForzaPage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
