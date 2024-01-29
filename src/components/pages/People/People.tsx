import './People.scss';
import React from 'react';

import ColumnPage from '../../common/ColumnPage/ColumnPage';

import person1 from '../../../assets/images/cat-1.jpg';
import person2 from '../../../assets/images/cat-2.jpg';
import person3 from '../../../assets/images/cat-3.jpg';
import person4 from '../../../assets/images/cat-4.jpg';

const peopleOne = [
  {
    name: 'Professor Snugglepaws',
    title: 'Chief Nap Officer',
    description: "Professor Snugglepaws is the mastermind behind optimizing the company's nap environment. This cat possesses an innate ability to locate the coziest spots, strategically choosing the softest cushions and warmest blankets. A seasoned expert in the art of relaxation, Professor Snugglepaws leads the charge in creating a stress-free atmosphere through strategic napping placements and gentle purring consultations.",
    image: person1
  },
  {
    name: 'Fluffy Harmony',
    title: 'Director of Feline Relations',
    description: "Fluffy Harmony excels in maintaining positive relationships among the feline workforce. This diplomatic cat mediates disputes with an elegant blend of tail flicks and friendly nose boops. By organizing playful team-building sessions and facilitating grooming circles, Fluffy Harmony ensures that the office environment remains harmonious and fosters a sense of camaraderie among the cat colleagues.",
    image: person2
  },
];

const peopleTwo = [
  {
    name: 'Sunny Whiskerfield',
    title: 'Senior Sunbeam Strategist',
    description: "Sunny Whiskerfield is a seasoned strategist when it comes to basking in sunlight. With a keen eye for optimal sunbeam locations, this cat expertly positions herself and her team members to soak up the warm rays. Sunny Whiskerfield's role involves surveying the office space, strategically placing cat trees near sunny spots, and orchestrating a purrfectly sunny atmosphere for the feline workforce.",
    image: person3
  },
  {
    name: 'Gourmet Whiskerina',
    title: 'Executive Treat Connoisseur',
    description: "Gourmet Whiskerina takes treat selection to the next level. This cat is a connoisseur of flavors and textures, curating a menu that satisfies the discerning palates of the feline employees. From organizing treat tastings to staying abreast of the latest trends in gourmet cat cuisine, Gourmet Whiskerina ensures that the company's treat offerings are not only delectable but also nutritionally sound, contributing to the overall well-being of her furry colleagues.",
    image: person4
  }
]

const People: React.FC = () => {
  return (
    <section className="people container">
      <ColumnPage title="squad">
        <div className="people__content">
          <div className="people__column">
            {peopleOne.map(person => (
              <div className="people__item">
                <img src={person.image} alt="person image" className="people__item-img" />
                <p className="people__item-name">{person.name}</p>
                <p className="people__item-title">{person.title}</p>
                <p className="people__item-description">{person.description}</p>
              </div>
            ))}
          </div>
          <div className="people__column">
            {peopleTwo.map(person => (
              <div className="people__item">
                <img src={person.image} alt="person image" className="people__item-img" />
                <p className="people__item-name">{person.name}</p>
                <p className="people__item-title">{person.title}</p>
                <p className="people__item-description">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ColumnPage>
    </section>
  );
};

export default People;