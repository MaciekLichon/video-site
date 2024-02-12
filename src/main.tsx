import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./styles/normalize.scss";
import "./styles/general.scss";
import "./styles/typography.scss";

setTimeout(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <BrowserRouter basename={"/video-site/"}>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}, 6000)

// The whole CSS animations lasts 6 sedonds
