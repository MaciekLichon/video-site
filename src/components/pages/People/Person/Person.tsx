import "./Person.scss";

import React from "react";

import { IPerson } from "../../../../data/data";

const Person: React.FC<IPerson> = ({ image, name, title, description }) => {
    return (
        <div className="person">
            <img src={image} alt="person image" className="person__img" />
            <p className="person__name">{name}</p>
            <p className="person__title">{title}</p>
            <p className="person__description">{description}</p>
        </div>
    );
};

export default Person;
