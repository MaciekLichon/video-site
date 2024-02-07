import "./Contact.scss";

import React from "react";

import { locationsData } from "../../../data/data";
import SingleLocation from "./SingleLocation/SingleLocation";
import TransitionedPage from "../../common/TransitionedPage/TransitionedPage";

const Contact: React.FC = () => {
    return (
        <TransitionedPage>
            <section className="contact container">
                <h2 className="contact__message">Hello!</h2>
                <a href="mailto:info@meowcorp.com" className="contact__email">info@meowcorp.com</a>
                <div className="contact__locations">
                    {locationsData.map((item) => (
                        <SingleLocation key={item.location} {...item} />
                    ))}
                </div>
            </section>
        </TransitionedPage>
    );
};

export default Contact;
