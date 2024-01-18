import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { DriftPage, ForzaPage, HomePage, Menu, TimeAttackPage } from "./components";


function App() {
  return (
    <Router>
      <>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
