import React from "react";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

// import Loading from "./components/pages/Loading/Loading";
import About from "./components/pages/About/About";
// import Awards from "./components/pages/Awards/Awards";
import NewAwards from "./components/pages/AwardsNew/NewAwards";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import People from "./components/pages/People/People";
import Videos from "./components/pages/Videos/Videos";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/common/Footer/Footer";
// import VideoPage from "./components/pages/Video/VideoPage";
import NewVideo from "./components/pages/VideoNew/NewVideo";
import NewHeader from "./components/common/NewHeader/NewHeader";

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
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/videos/:id" element={<NewVideo />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
};

export default App;
