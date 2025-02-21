"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const CalltoAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className="container flex lg:text-left text-center lg:mb-0 mb-28">
      <motion.div
        className="lg:w-7/12 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "tween", duration: 0.8 }}
      >
        <h2>Давайте работать вместе.</h2>
        <p className="subheader mb-8">
          Разработка и верстка сайтов, добавление обратной связи, интеграция с API
        </p>
        <motion.div
          className="flex gap-4 lg:justify-start justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "tween", duration: 0.8 }}
        >
          <a href="mailto:ilyakatereniuk@gmail.com">
            <motion.button
              initial={{ scale: 1 , boxShadow: "none" }}
              whileHover={{scale: 1.05, boxShadow: "0 0 10px rgba(58, 134, 255, 0.5)"}}
              whileTap={{
                scale: 0.8,
              }}
              transition={{ type: "tween", duration: 0.2 }}
           className="button primary">связаться</motion.button>
          </a>
          <a href="#skills">
            <motion.button
              initial={{ scale: 1 , boxShadow: "none" }}
              whileHover={{scale: 1.05, boxShadow: "0 0 10px rgba(164, 94, 229, 0.5)"}}
              whileTap={{
                scale: 0.9,
              }}
           className="button secondary">навыки</motion.button>
          </a>
        </motion.div>
      </motion.div>

      <div className="lg:w-5/12 hidden lg:flex justify-center relative">
        <div className="background">
          <img src="/images/background.png" alt="background pattern" className="background-pat" />
        </div>
      </div>
    </div>
  );
};

export default CalltoAction;
