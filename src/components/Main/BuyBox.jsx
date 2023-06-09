import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function BuyBox() {
  return (
    <Fragment>
      <div className="sm:w-[500px] w-[400px] flex flex-col bg-white rounded-xl mt-[100px] md:translate-x-[60%] md:mx-0 mx-auto pb-5 relative">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="flex gap-2 items-center font-inter py-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-black cursor-pointer"
            >
              Swap
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className=" text-textGrey cursor-pointer"
            >
              Buy
            </motion.p>
            <img src="/images/box/dot.png" alt="dot" className="w-2 h-2 mt-1" />
          </div>
          <motion.img
            initial={{ rotateZ: 180 }}
            whileInView={{ rotateZ: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true, amount: 0.5 }}
            src="/images/box/settings.png"
            alt="settings"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between bg-lightGrey px-7 rounded-2xl pb-10">
            <input
              type="number"
              placeholder="0"
              min="0"
              className="text-textGrey text-[45px] w-[200px] bg-lightGrey [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <motion.button
              className="bg-boxPink text-black font-inter rounded-3xl px-5 my-5 sm:text-[22px] text-[10px]"
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Select token
            </motion.button>
          </div>
          <div className="flex justify-between mt-3 bg-lightGrey px-7 rounded-2xl pb-10">
            <input
              type="number"
              placeholder="0"
              min="0"
              className="text-textGrey text-[45px] w-[200px] bg-lightGrey [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <motion.button
              className="bg-boxPink text-black font-inter rounded-3xl px-5 my-5 sm:text-[22px] text-[10px]"
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Select token
            </motion.button>
          </div>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-5 font-inter text-boxPink text-[25px] font-bold bg-boxPink bg-opacity-[12%] rounded-3xl w-[90%] mx-auto py-4"
        >
          Connect Wallet
        </motion.button>
        <img
          src="/images/box/down.png"
          alt="down"
          className="w-10 h-10 absolute top-[150px] left-[50%] translate-x-[-50%]"
        />
      </div>
    </Fragment>
  );
}
