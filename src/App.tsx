import React from "react";
import { Routes, Route } from "react-router";

import About from "./components/pages/About/About";
import Awards from "./components/pages/Awards/Awards";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import People from "./components/pages/People/People";
import Videos from "./components/pages/Videos/Videos";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import VideoPage from "./components/pages/Video/VideoPage";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/people" element={<People />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/videos/:id" element={<VideoPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
