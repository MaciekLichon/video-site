import React from "react";
import TransitionedPage from "../../common/TransitionedPage/TransitionedPage";

const NotFound: React.FC = () => {
    return (
        <TransitionedPage>
            <section className="not-found container">
                <h2>Not found</h2>
            </section>
        </TransitionedPage>
    );
};

export default NotFound;
