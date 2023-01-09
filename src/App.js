import { useState } from 'react';
import './App.css';
import Splash from './components/Splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const closeSplash = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash && <Splash closeSplash={closeSplash} />}
    </div>
  );
}

export default App;
