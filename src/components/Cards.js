import { useState, useEffect } from 'react';
import '../styles/Cards.css';
import Card from './Card';
import getRandomCards from '../utils/getRandomCards';
import shuffleArray from '../utils/shuffleArray';

function Cards(props) {
  const [cards, setCards] = useState([]);
  const [lastShuffleIds, setLastShuffleIds] = useState(null);

  const handleClick = (id) => {
    const selectedCard = cards.find((card) => card.id === id);

    if (selectedCard.wasSelected) {
      props.setIsOver(true);
      return;
    }

    setCards((prevCards) => {
      let newCards = prevCards.map((card) => {
        if (card.id === id) return { ...card, wasSelected: true };
        return card;
      });

      let shuffleIds;

      do {
        newCards = shuffleArray(newCards);
        shuffleIds = newCards.map((card) => card.id).join(',');
      } while (shuffleIds === lastShuffleIds);

      return newCards;
    });
  };

  useEffect(() => {
    setLastShuffleIds(cards.map((card) => card.id).join(','));
  }, [cards]);

  useEffect(() => {
    const cardsCount = 2 + props.level;
    const randomCards = getRandomCards(cardsCount);

    setCards(randomCards);
  }, [props.level]);

  const { levelUp } = props;

  useEffect(() => {
    if (!cards.length) return;

    const shuffleIds = cards.map((card) => card.id).join(',');

    if (shuffleIds === lastShuffleIds) return;

    const allSelected = cards.every((card) => card.wasSelected);

    if (allSelected) {
      levelUp();
    }
  }, [cards, lastShuffleIds, levelUp]);

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

  return <div className="Cards">{cardElements}</div>;
}

export default Cards;
