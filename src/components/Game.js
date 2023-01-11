import { useState } from 'react';
import '../styles/Game.css';
import Header from './Header';
import Cards from './Cards';
import GameOver from './GameOver';

function Game() {
  const [level, setLevel] = useState(1);
  const [isOver, setIsOver] = useState(false);

  const levelUp = () => {
    setLevel((prevLevel) => prevLevel + 1);
  };

  const restartGame = () => {
    setLevel(1);
    setIsOver(false);
  };

  return (
    <div className="Game">
      <Header level={level} isOver={isOver} />
      {isOver ? (
        <GameOver level={level} restartGame={restartGame} />
      ) : (
        <Cards level={level} setIsOver={setIsOver} levelUp={levelUp} />
      )}
    </div>
  );
}

export default Game;
