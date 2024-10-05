
import './App.css'
import LandingPage from './components/LandingPage'
import Earth from './components/Earth'
import { useState } from 'react';

function App() {

  const [displayMain, setDisplayMain] = useState(true);

  const toggleDisplay = () => {
    setDisplayMain((prevDisplay) => !prevDisplay); // Toggles the state
  };

  return (
    
    <div className="">
      {displayMain ? <LandingPage onToggleDisplay={toggleDisplay}/> : <Earth/>}
    </div>
  )
}

export default App
