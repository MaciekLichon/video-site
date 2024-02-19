import "./People.scss";
import React from "react";

import ColumnPage from "../../common/ColumnPage/ColumnPage";
import Person from "./Person/Person";

import { peopleOne, peopleTwo } from "../../../data/data";
import TransitionedPage from "../../common/TransitionedPage/TransitionedPage";

const People: React.FC = () => {
    return (
        <TransitionedPage>
            <section className="people container">
                <ColumnPage title="people">
                    <div className="people__content">
                        <div className="people__column">
                            {peopleOne.map((person) => (
                                <Person key={person.name} {...person} />
                            ))}
                        </div>
                        <div className="people__column">
                            {peopleTwo.map((person) => (
                                <Person key={person.name} {...person} />
                            ))}
                        </div>
                    </div>
                </ColumnPage>
            </section>
        </TransitionedPage>
    );
};

export default People;
