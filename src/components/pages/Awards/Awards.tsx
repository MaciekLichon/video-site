import "./Awards.scss";
import React from "react";

import ColumnPage from "../../common/ColumnPage/ColumnPage";

import { awardsData } from "../../../data/data";
import Award from "./Award/Award";

const Awards: React.FC = () => {
    return (
        <section className="awards container">
            <ColumnPage title="awards">
                <div className="awards__content">
                    {awardsData.map((item) => (
                        <Award key={item.title} {...item} />
                    ))}
                </div>
            </ColumnPage>
        </section>
    );
};

export default Awards;
