import React from 'react';
import './styles.scss';
import LandingPage from './sections/LandingPage';
import About from './sections/About';
import Samples from './sections/Samples';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Samples />
    </div>
  );
}

export default App;
