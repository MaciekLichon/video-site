import "./Awards.scss";
import React from "react";

import ColumnPage from "../../common/ColumnPage/ColumnPage";

import { awardsData } from "../../../data/data";
import Award from "./Award/Award";
import TransitionedPage from "../../common/TransitionedPage/TransitionedPage";

const Awards: React.FC = () => {
    return (
        <TransitionedPage>
            <section className="awards container">
                <ColumnPage title="awards">
                    <div className="awards__content">
                        {awardsData.map((item) => (
                            <Award key={item.title} {...item} />
                        ))}
                    </div>
                </ColumnPage>
            </section>
        </TransitionedPage>
    );
};

export default Awards;
