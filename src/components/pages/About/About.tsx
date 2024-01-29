import './About.scss';
import React from 'react';

import ColumnPage from '../../common/ColumnPage/ColumnPage';

const About: React.FC = () => {
  return (
    <section className="about container">
      <ColumnPage title="about">
        <div className="about__content">
          <p>In the heart of Purrvana, the whimsical rhythm of success is conducted by the creative minds behind our feline-centric culture. As recipients of the Purrvana Excellence in Whiskerization, we take pride in fostering an environment where whiskers aren't just a facial feature but a celebrated aspect of individuality. The Diamond Whisk shines bright as a symbol of our commitment to crafting a workplace where each cat's unique charm is not only acknowledged but embraced.</p>
          <p>At Purrvana, the Pawsperity Square, Clawston office is a testament to our dedication to overall excellence. The Purrfection Pioneer Award, our crowning achievement, recognizes the synergy between our cat colleagues and our commitment to innovation in feline-friendly corporate practices. With a score of 9.9 out of 10 in the Pawsome Platinum category, we stride forward, paws held high, into a future where cats and corporate success coexist in purrfect harmony.</p>
          <p>Purrvana's journey extends across unique locations like Kitty Grove, Purrlandia, and Tabby Towers, Whiskington. These aren't just physical spaces but vibrant hubs where the Whiskerized ethos thrives. As the Platinum Treat holder, we continue to delight feline taste buds, ensuring that the golden thread of our cat-inspired brilliance weaves through every facet of our expanding empire.</p>
          <p>Step into our Catropolis Central, Purrbania location, and you'll witness firsthand the seamless integration of feline finesse and corporate prowess. Gourmet Whiskerina's culinary mastery, celebrated with the Platinum Treat, exemplifies our commitment to providing a gastronomic haven for our discerning cat colleagues. The WhiskerWonder Distinction and SnoozeMaster Excellence Award are more than accolades; they symbolize our dedication to making Purrvana not just a workplace but a realm of endless possibilities for our cherished feline associates.</p>
        </div>
      </ColumnPage>
    </section>
  );
};

export default About;