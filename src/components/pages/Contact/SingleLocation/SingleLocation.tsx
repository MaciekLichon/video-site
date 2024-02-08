import { ILocation } from "../../../../data/data";
import "./SingleLocation.scss";

import React from "react";

const SingleLocation: React.FC<ILocation> = ({ location, phone, email, address }) => {
    return (
        <div className="location">
            <h6 className="location__name">{location}</h6>
            <p>{phone}</p>
            <p>{email}</p>
            <p className="location__address">{address}</p>
        </div>
    );
};

export default SingleLocation;
