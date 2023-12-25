import './App.css';
import Background from './background.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/index.js';
import Error404 from './pages/404/404.jsx';

function App() {
  return (
    <Router>
      <div className="App">
      <Background />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
