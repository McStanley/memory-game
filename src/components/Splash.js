import '../styles/Splash.css';

function Splash(props) {
  return (
    <div className="Splash">
      <h1 className="Splash-header">Memory</h1>
      <p className="Splash-text">Memory card game</p>
      <button className="Splash-button" onClick={props.closeSplash}>
        Play
      </button>
    </div>
  );
}

export default Splash;
