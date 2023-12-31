import './App.css';
import Background from './background.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Error404 from './pages/404/404.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Background />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
