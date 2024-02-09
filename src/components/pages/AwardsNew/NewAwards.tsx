import "./NewAwards.scss";
import React from "react";

import ColumnPage from "../../common/ColumnPage/ColumnPage";

import { newAwardsData } from "../../../data/data";
import NewAward from "./NewAward/NewAward";
import TransitionedPage from "../../common/TransitionedPage/TransitionedPage";

const NewAwards: React.FC = () => {
    return (
        <TransitionedPage>
            <section className="awards container">
                <ColumnPage title="awards">
                    <div className="awards__content">
                        {newAwardsData.map((item) => (
                            <NewAward key={item.id} {...item} />
                        ))}
                    </div>
                </ColumnPage>
            </section>
        </TransitionedPage>
    );
};

export default NewAwards;