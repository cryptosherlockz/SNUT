import React, { Fragment } from "react";
import { howToBuy } from "../../data/constants";
import { motion } from "framer-motion";

export default function How() {
  return (
    <Fragment>
      <div className="sm:mt-[200px] mt-[300px] relative" id="HOW TO BUY">
        {/* <motion.img
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          src="/images/How/pepe.png"
          alt="howpepe"
          className="absolute right-[20%] sm:top-[-100px] top-[-150px] w-[250px] -z-10"
        /> */}
        <motion.h1
          className="font-inter text-black font-bold lg:w-[30%] w-[80%] mx-auto text-[45px] sm:py-[30px] text-center"
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          HOW TO BUY
        </motion.h1>
        <div className="w-[70%] mx-auto gap-5 flex flex-col mt-10">
          {howToBuy.map((data) => {
            return (
              <div
                className=" bg-cardBrown flex sm:flex-row flex-col items-center gap-10 justify-center py-7 rounded-3xl rounded-tl-none rounded-br-none border-2 shadow-white shadow-box"
                key={data.image}
              >
                <img
                  src={`/images/How/${data.image}.png`}
                  alt={data.image}
                  loading="lazy"
                  className="h-24"
                />
                <div className="flex flex-col text-white text gap-3 w-[70%]">
                  <motion.h1
                    className="font-inter font-bold text-left"
                    initial={{ opacity: 0, translateY: "200%" }}
                    whileInView={{ opacity: 1, translateY: "0%" }}
                    transition={{
                      delay: 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {data.tittle}
                  </motion.h1>
                  <motion.p
                    className="font-Comfortaa text-[13px]"
                    initial={{ opacity: 0, translateY: "100%" }}
                    whileInView={{ opacity: 1, translateY: "0%" }}
                    transition={{
                      delay: 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 60,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {data.desc}
                  </motion.p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
