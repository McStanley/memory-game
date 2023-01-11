import { useState, useEffect } from 'react';
import '../styles/Cards.css';
import Card from './Card';
import getRandomCards from '../utils/getRandomCards';
import shuffleArray from '../utils/shuffleArray';

function Cards(props) {
  const [cards, setCards] = useState([]);

  const handleClick = (id) => {
    const selectedCard = cards.find((card) => card.id === id);

    if (selectedCard.wasSelected) {
      props.setIsOver(true);
      return;
    }

    setCards((prevCards) => {
      const newCards = prevCards.map((card) => {
        if (card.id === id) return { ...card, wasSelected: true };
        return card;
      });

      return newCards;
    });
  };

  useEffect(() => {
    const cardsCount = 2 + props.level;
    const randomCards = getRandomCards(cardsCount);

    setCards(randomCards);
  }, [props.level]);

  const { levelUp } = props;

  useEffect(() => {
    if (!cards.length) return;

    const allSelected = cards.every((card) => card.wasSelected);

    if (allSelected) {
      setCards([]);
      levelUp();
    }
  }, [cards, levelUp]);

  const cardElements = cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        image={card.image}
        name={card.name}
        handleClick={handleClick}
      />
    );
  });

  return <div className="Cards">{shuffleArray(cardElements)}</div>;
}

export default Cards;
