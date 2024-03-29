import "./Person.scss";

import React from "react";
import { motion } from "framer-motion";

import { IPerson } from "../../../../data/data";

const pVariants = {
    hidden: {
        y: 15,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const Person: React.FC<IPerson> = ({ image, name, title, description }) => {
    return (
        <div className="person">
            <div className="person__image">
                <motion.img
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        duration: 1.5,
                    }}
                    viewport={{ once: true }}
                    src={image}
                    alt="person image"
                    className="person__image-img"
                />
            </div>
            <div className="person__text">
                <motion.h5
                    initial="hidden"
                    whileInView="visible"
                    variants={pVariants}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="person__name"
                >
                    {name}
                </motion.h5>
                <motion.h6
                    initial="hidden"
                    whileInView="visible"
                    variants={pVariants}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="person__title"
                >
                    {title}
                </motion.h6>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={pVariants}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="person__description"
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
};

export default Person;
