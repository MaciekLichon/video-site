import './Contact.scss';

import React from 'react';

const locationsData = [
  {
    location: 'Whisker Harbor',
    phone: '123 456 789',
    email: 'email@com.pl',
    address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi.'
  },
  {
    location: 'Pawsperity Square',
    phone: '123 456 789',
    email: 'email@com.pl',
    address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi.'
  },
  {
    location: 'Catropolis Central',
    phone: '123 456 789',
    email: 'email@com.pl',
    address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi.'
  }
]

const Contact: React.FC = () => {
  return (
    <section className="contact container">
      <h2 className="contact__message">Hello!</h2>
      <div className="contact__locations">
        {locationsData.map(item => (
          <div className="contact__location">
            <p className="contact__location-name">{item.location}</p>
            <p>{item.phone}</p>
            <p>{item.email}</p>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;