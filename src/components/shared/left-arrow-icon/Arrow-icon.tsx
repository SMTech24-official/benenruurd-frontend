import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { motion } from "framer-motion";

function ArrowIcon() {
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }} // starts off-screen right & invisible
            animate={{ x: 0, opacity: 1 }}      // moves to position & becomes visible
            transition={{ duration: 0.5, ease: "easeOut" }} // smoothness
        >
            <GoArrowLeft />
        </motion.div>
    );
}

export default ArrowIcon;
