import "./Contact.scss";

import React from "react";

import { locationsData } from "../../../data/data";
import SingleLocation from "./SingleLocation/SingleLocation";

const Contact: React.FC = () => {
    return (
        <section className="contact container">
            <h2 className="contact__message">Hello!</h2>
            <div className="contact__locations">
                {locationsData.map((item) => (
                    <SingleLocation key={item.location} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Contact;
