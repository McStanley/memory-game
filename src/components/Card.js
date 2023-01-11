import '../styles/Card.css';

function Card(props) {
  return (
    <div className="Card" onClick={() => props.handleClick(props.id)}>
      <img className="Card-image" src={props.image} alt={props.name} />
      <p className="Card-name">{props.name}</p>
    </div>
  );
}

export default Card;
