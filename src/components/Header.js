import '../styles/Header.css';

function Header(props) {
  return (
    <div className="Header">
      <h1 className="Header-title">Memory</h1>
      {!props.isOver && <p className="Header-level">level {props.level}</p>}
    </div>
  );
}

export default Header;
