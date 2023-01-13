import '../styles/GameOver.css';
import GitHubLogo from '../assets/GitHub.png';

function GameOver(props) {
  return (
    <div className="GameOver">
      <h2 className="GameOver-header">Game Over</h2>
      <p className="GameOver-result">You've reached level {props.level}</p>
      <button className="GameOver-button" onClick={props.restartGame}>
        New Game
      </button>
      <a
        href="https://github.com/McStanley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHubLogo} alt="GitHub" className="GameOver-github" />
      </a>
    </div>
  );
}

export default GameOver;
