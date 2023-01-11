import AudreyHepburn from '../assets/AudreyHepburn.jpg';
import CharlieChaplin from '../assets/CharlieChaplin.jpg';
import Cleopatra from '../assets/Cleopatra.jpg';
import Devil from '../assets/Devil.jpg';
import Godfather from '../assets/Godfather.jpg';
import Maharaja from '../assets/Maharaja.jpg';
import Medusa from '../assets/Medusa.jpg';
import Ninja from '../assets/Ninja.jpg';
import Pirate from '../assets/Pirate.jpg';
import Samurai from '../assets/Samurai.jpg';
import SherlockHolmes from '../assets/SherlockHolmes.jpg';
import Steampunk from '../assets/Steampunk.jpg';
import SteveJobs from '../assets/SteveJobs.jpg';
import Tintin from '../assets/Tintin.jpg';
import VanGogh from '../assets/VanGogh.jpg';
import Viking from '../assets/Viking.jpg';

const allCards = [
  { id: 1, image: AudreyHepburn, name: 'Audrey Hepburn', wasSelected: false },
  { id: 2, image: CharlieChaplin, name: 'Charlie Chaplin', wasSelected: false },
  { id: 3, image: Cleopatra, name: 'Cleopatra', wasSelected: false },
  { id: 4, image: Devil, name: 'Devil', wasSelected: false },
  { id: 5, image: Godfather, name: 'Godfather', wasSelected: false },
  { id: 6, image: Maharaja, name: 'Maharaja', wasSelected: false },
  { id: 7, image: Medusa, name: 'Medusa', wasSelected: false },
  { id: 8, image: Ninja, name: 'Ninja', wasSelected: false },
  { id: 9, image: Pirate, name: 'Pirate', wasSelected: false },
  { id: 10, image: Samurai, name: 'Samurai', wasSelected: false },
  {
    id: 11,
    image: SherlockHolmes,
    name: 'Sherlock Holmes',
    wasSelected: false,
  },
  { id: 12, image: Steampunk, name: 'Steampunk', wasSelected: false },
  { id: 13, image: SteveJobs, name: 'Steve Jobs', wasSelected: false },
  { id: 14, image: Tintin, name: 'Tintin', wasSelected: false },
  { id: 15, image: VanGogh, name: 'Van Gogh', wasSelected: false },
  { id: 16, image: Viking, name: 'Viking', wasSelected: false },
];

function getRandomCards(count) {
  const cardsPool = [...allCards];
  const randomCards = [];

  while (count) {
    const randomIndex = Math.floor(Math.random() * cardsPool.length);
    randomCards.push(...cardsPool.splice(randomIndex, 1));

    count--;
  }

  return randomCards;
}

export default getRandomCards;
