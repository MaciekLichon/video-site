import './ColumnPage.scss';

import React from 'react';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const ColumnPage: React.FC<IProps> = ({title, children}) => {
  return (
    <div className="columns">
      <div className="columns__title">
        <h2 className="columns__title-text">{title}</h2>
      </div>
      <div className='columns__content'>
        {children}
      </div>
    </div>
  );
};

export default ColumnPage;