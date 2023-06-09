import React, { Fragment } from "react";
import { roadmapDetails } from "../../data/constants";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <Fragment>
      <div className="mt-[100px]" id="ROADMAP">
        <motion.h1
          className="font-inter text-black font-bold text-center text-[45px] py-[30px]"
          initial={{ opacity: 0, translateY: "100px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          ROADMAP
        </motion.h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col text-white font-inter bg-cardBrown xs:w-[400px] w-[300px] px-5 py-2 rounded-3xl rounded-tl-none rounded-br-none border-2 shadow-white shadow-roadmapbox mx-auto xs:text-[17px] text-[10px]">
            <motion.p
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 70,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Phase 1 : MakeMeme
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 70,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Phase 2: Make More Memes
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 70,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Phase 3: Make More and More Memes
            </motion.p>
          </div>{" "}
          <motion.p
            className="text-black font-Comfortaa ss:w-[40%] w-[80%] mx-auto text-center text-[15px] font-bold"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Lol. On a serious note, Community will decide more as we go down the
            road, but here is what we are gonna do
          </motion.p>
          <div className="mx-auto flex flex-wrap gap-10 justify-center">
            {roadmapDetails.map((roadmap, idx) => {
              return (
                <div
                  className="bg-cardBrown flex flex-col gap-5 w-[300px] p-10 rounded-3xl rounded-tl-none rounded-br-none border-2 shadow-white shadow-box"
                  key={roadmap.tittle}
                >
                  <motion.h1
                    initial={{ opacity: 0, translateY: "100px" }}
                    whileInView={{ opacity: 1, translateY: "0px" }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="font-inter text-white font-bold mx-auto"
                  >
                    {roadmap.tittle}
                  </motion.h1>
                  <div className="flex flex-col text-white font-Comfortaa gap-2">
                    {roadmap.plans.map((plans, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: "0px" }}
                        transition={{
                          delay: idx * 0.2,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 80,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        {plans}
                      </motion.p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
