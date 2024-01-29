import './Awards.scss';
import React from 'react';

import ColumnPage from '../../common/ColumnPage/ColumnPage';

import awardOne from '../../../assets/images/award-1.jpg';
import awardTwo from '../../../assets/images/award-2.jpg';
import awardThree from '../../../assets/images/award-3.jpg';
import awardFour from '../../../assets/images/award-4.jpg';
import awardFive from '../../../assets/images/award-5.jpg';
import awardSix from '../../../assets/images/award-6.jpg';

const awardsData = [
  {
    award: 'Golden Whisker',
    description: 'Recognized for pioneering innovative nap strategies, creating a purrfectly relaxed workplace.',
    title: 'SnoozeMaster Excellence Award',
    year: '2024',
    image: awardOne
  },
  {
    award: 'Silver Purr',
    description: 'Acknowledged for outstanding mediation, fostering a harmonious and playful feline community.',
    title: 'Paw-sitive Harmony Accolade',
    year: '2023',
    image: awardTwo
  },
  {
    award: 'Bronze Beam',
    description: 'Celebrated for expertly optimizing sunbeam access, enhancing well-being through strategic basking.',
    title: 'Solar Serenity Accolade',
    year: '2021',
    image: awardThree
  },
  {
    award: 'Platinum Treat',
    description: 'Awarded for exceptional treat curation, delighting taste buds and promoting nutritional excellence.',
    title: 'Gourmet Whisker Delight',
    year: '2023',
    image: awardFour
  },
  {
    award: 'Diamond Whisk',
    description: 'Recognized for creating a whisker-centric culture, prioritizing the happiness of feline employees.',
    title: 'WhiskerWonder Distinction',
    year: '2022',
    image: awardFive
  },
  {
    award: 'Pawsome Platinum',
    description: 'Honored for overall excellence in feline-friendly corporate practices and pawsitive workplace initiatives.',
    title: 'Purrfection Pioneer Award',
    year: '2022',
    image: awardSix
  },
]

const Awards: React.FC = () => {
  return (
    <section className="awards container">
      <ColumnPage title="awards">
        <div className="awards__content">
          {awardsData.map(item => (
            <div className="awards__item">
              <h3 className="awards__item-trophy">{item.award}</h3>
              <p className="awards__item-description">{item.description}</p>
              <p className="awards__item-title">{item.title}</p>
              <p className="awards__item-year">{item.year}</p>
              <svg className="awards__item-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
              <img src={item.image} alt="reward image" className="awards__item-image" />
            </div>
          ))}
        </div>
      </ColumnPage>
    </section>
  );
};

export default Awards;