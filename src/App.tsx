import React from "react";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

import About from "./components/pages/About/About";
import NewAwards from "./components/pages/AwardsNew/NewAwards";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import People from "./components/pages/People/People";
import Contact from "./components/pages/Contact/Contact";

import Footer from "./components/common/Footer/Footer";
import NewHeader from "./components/common/NewHeader/NewHeader";

import VideosPage from "./components/pages/VideoPages/Videos";
import Video from "./components/pages/VideoSingle/Video";
import CommercialsPage from "./components/pages/VideoPages/Commercials";
import Commercial from "./components/pages/VideoSingle/Commercial";

const App: React.FC = () => {
    const location = useLocation();
    return (
        <>
            <NewHeader />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/awards" element={<NewAwards />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/commercials" element={<CommercialsPage />} />
                    <Route path="/commercials/:id" element={<Commercial />} />
                    <Route path="/videos" element={<VideosPage />} />
                    <Route path="/videos/:id" element={<Video />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
};

export default App;
