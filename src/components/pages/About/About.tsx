import "./About.scss";
import React from "react";

import ColumnPage from "../../common/ColumnPage/ColumnPage";
import Paragraph from "./Paragraph/Paragraph";
import TransitionedPage from "../../common/TransitionedPage/TransitionedPage";

import { aboutParagraphs } from "../../../data/data";

const About: React.FC = () => {
    return (
        <TransitionedPage>
            <section className="about container">
                <ColumnPage title="about">
                    <div className="about__content">
                        {aboutParagraphs.map((item) => (
                            <Paragraph key={item.id} text={item.text} />
                        ))}
                    </div>
                </ColumnPage>
            </section>
        </TransitionedPage>
    );
};

export default About;
