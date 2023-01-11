import '../styles/GameOver.css';

function GameOver(props) {
  return (
    <div className="GameOver">
      <h2 className="GameOver-header">Game Over</h2>
      <p className="GameOver-result">You've reached level {props.level}</p>
      <button className="GameOver-button" onClick={props.restartGame}>
        New Game
      </button>
    </div>
  );
}

export default GameOver;
