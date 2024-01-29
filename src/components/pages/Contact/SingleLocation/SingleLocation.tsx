import { ILocation } from "../../../../data/data";
import "./SingleLocation.scss";

import React from "react";

const SingleLocation: React.FC<ILocation> = ({ location, phone, email, address }) => {
    return (
        <div className="location">
            <p className="location__name">{location}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
        </div>
    );
};

export default SingleLocation;
