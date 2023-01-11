import '../styles/Splash.css';

function Splash(props) {
  return (
    <div className="Splash">
      <h1 className="Splash-header">Memory</h1>
      <p className="Splash-subheader">Memory card game</p>
      <p className="Splash-instructions">
        Select every character.
        <br />
        Make sure not to repeat yourself.
      </p>
      <button className="Splash-button" onClick={props.closeSplash}>
        Play
      </button>
    </div>
  );
}

export default Splash;
