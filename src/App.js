import { useState } from 'react';
import './App.css';
import Splash from './components/Splash';
import Game from './components/Game';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const closeSplash = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? <Splash closeSplash={closeSplash} /> : <Game />}
    </div>
  );
}

export default App;
