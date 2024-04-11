import './css/global.css';
import Background from './background.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/index.js';
import Error404 from './pages/404/404.jsx';
import About from './pages/about.js';
import Projects from './pages/projects.js';

function App() {
  return (
    <Router>
      <div className="App">
      <Background/>
        <div className='content'>
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
