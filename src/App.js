import './App.css';
import Background from './background.jsx';
import AboutSection from './components/About.jsx';
import Hero from './components/Hero.jsx';

function App() {
  return (
    <div className="App">
      <Background />
      <div className='app-container'>
        <div className='scroll-snap-section'>
          <Hero />
        </div>
        <div className='scroll-snap-section'>
          <AboutSection />
        </div>
      </div>

    </div>
  );
}

export default App;
