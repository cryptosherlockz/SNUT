import React, { Fragment } from "react";
import { herobuttons } from "../../data/constants";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <Fragment>
      <div className="flex flex-wrap mt-[100px] md:w-[60%] w-[80%] mx-auto gap-5 relative top-0 sm:justify-start justify-center">
        {herobuttons.map((data, idx) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                translateX: `${idx % 2 === 0 ? "100%" : "-100%"}`,
              }}
              whileInView={{ opacity: 1, translateX: "0%" }}
              transition={{
                delay: idx * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 60,
              }}
              viewport={{ once: true, amount: 0.75 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              key={data.tittle}
              className={`flex py-3 border-2 border-black rounded-3xl sm:w-[300px] xs:w-[150px] w-[120px] hover:scale-90 cursor-pointer ${
                data.tittle === "UNISWAP" ? "bg-lightYellow" : "bg-darkYellow"
              }`}
            >
              <p className="text-black font-inter text-center mx-auto xs:text-[15px] text-[10px]">
                {data.tittle}
              </p>
              <img
                src={`/images/Hero/${data.logo}.png`}
                className="xs:w-5 w-3 xs:h-5 h-3 mr-5"
                alt={data.tittle}
              />
            </motion.div>
          );
        })}
      </div>
    </Fragment>
  );
}
