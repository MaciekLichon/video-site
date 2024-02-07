import React from "react";
import { motion } from "framer-motion";

interface IProps {
    children: React.ReactNode;
}

const TransitionedPage: React.FC<IProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
        >
            {children}
        </motion.div>
    );
};

export default TransitionedPage;
