import React from "react";

import { motion } from "framer-motion";

interface IProps {
    text: string;
}

const Paragraph: React.FC<IProps> = ({ text }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.5,
            }}
            viewport={{ once: true }}
        >
            {text}
        </motion.p>
    );
};

export default Paragraph;
