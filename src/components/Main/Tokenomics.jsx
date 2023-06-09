import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function Tokenomics() {
  return (
    <Fragment>
      <div className="mt-[100px] w-[80%] mx-auto" id="TOKENOMICS">
        <motion.h1
          className="font-inter text-black font-bold text-center text-[45px] py-[30px]"
          initial={{ opacity: 0, translateY: "100px", rotateY: 180 }}
          whileInView={{ opacity: 1, translateY: "0px", rotateY: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          TOKENOMICS
        </motion.h1>
        <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 justify-between items-center">
          <div className="flex flex-col">
            {/* <motion.img
              initial={{ translateY: "150px" }}
              whileInView={{ translateY: "0px" }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              src="/images/tokenomics/sadpepe.png"
              alt="sadpepe"
              className="lg:w-[500px] w-[300px] relative lg:left-[-100px] left-[-50px] -z-10"
            /> */}
            <motion.div
              initial={{ opacity: 0, translateY: "-150px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex bg-cardBrown p-5 lg:w-[500px] w-[350px] rounded-3xl rounded-tl-none rounded-br-none border-2 shadow-box mt-[50px]"
            >
              <div className="text-white font-Comfortaa">
                <p className="leading-7">
                  No Taxes, No Bullshit. It's that simple.
                  <br />
                  <br />
                  <ul className="list-disc relative left-5">
                    <li>No Taxes</li>
                    <li>No Bullshit. It's that simple.</li>
                    <li>95% tokens sent to Liquidity Pool</li>
                    <li>
                      LP Burnt on Contract Deployment and Contract renounced 5%
                      tokens
                    </li>
                    <li>
                      For Binance and other CEXs, Dex's, Bridges and Burn This
                      wallet is easily trackable with the ENS name
                      "masterofmemeswallet.eth"
                    </li>
                  </ul>
                </p>
              </div>
            </motion.div>
          </div>
          <motion.img
            initial={{ opacity: 0, rotate: 360, scale: 0 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 40,
            }}
            viewport={{ once: true, amount: 0.5 }}
            src="/images/tokenomics/notax.png"
            alt="notax"
            className="w-[600px]  h-[500px] ob object-contain mt-10"
          />
        </div>
      </div>
    </Fragment>
  );
}
