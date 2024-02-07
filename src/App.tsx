import React from "react";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

// import Loading from "./components/pages/Loading/Loading";
import About from "./components/pages/About/About";
import Awards from "./components/pages/Awards/Awards";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import People from "./components/pages/People/People";
import Videos from "./components/pages/Videos/Videos";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/common/Footer/Footer";
// import Header from "./components/common/Header/Header";
import VideoPage from "./components/pages/Video/VideoPage";
import NewHeader from "./components/common/NewHeader/NewHeader";

const App: React.FC = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [previewFinished, setPreviewFinished] = useState(false);

    const location = useLocation();
    return (
        <>
            {/* {(isLoading || !previewFinished) && <Loading setPreviewFinished={setPreviewFinished} />} */}
            <>
                <NewHeader />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        {/* <Route path="" element={<Home setIsLoading={setIsLoading} />} /> */}
                        <Route path="" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/awards" element={<Awards />} />
                        <Route path="/people" element={<People />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/videos/:id" element={<VideoPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
                <Footer />
            </>
        </>
    );
};

export default App;
