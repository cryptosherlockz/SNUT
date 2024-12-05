import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { useSendTransaction, useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { ConnectButton } from '@rainbow-me/rainbowkit';
//0x3eCeeB0959F4e283c44CD2509bC459B30C776def
export default function BuyBox() {
  const { data: hash, sendTransaction } = useSendTransaction()
  const { isConnected } = useAccount()

  const [usdtText, setUsdtText] = useState("");
  const [tokenText, setTokenText] = useState("0");
  const tokenPrice = 0.00001;

  // const []

  // const contractAddress = "0x3eCeeB0959F4e283c44CD2509bC459B30C776def";
  // const { address, isConnected } = useAccount();
  // const { config } = usePrepareContractWrite({
  //   address: contractAddress,
  //   abi: contractABI,
  //   functionName: "buyTokens", // Replace with your contract function
  //   overrides: {
  //     value: ethers.utils.parseEther("0.1"), // Amount to send in ETH
  //   },
  // });

  const handleOnUSDTChange = (e) => {
    console.log(e)
    let usdtValue = e.target.value;
    setUsdtText(usdtValue)
    let allotted = parseFloat(usdtValue/tokenPrice).toFixed(1)
    setTokenText(allotted);
  }

  return (
    <Fragment>
      <div className="sm:w-[500px] w-[400px] flex flex-col bg-white rounded-xl md:translate-x-[10%] md:mx-0 mx-auto pb-5 relative">
        <div className="flex items-center justify-between w-[90%] mx-auto center">
          <motion.h6
            className="font-inter text-black font-bold text-center text-[18px] py-[15px]"
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
            {`${tokenText} SNUT = $${usdtText}`}
          </motion.h6>
        </div>
        <div className="w-[90%] mx-auto">
          <motion.h6
            className="font-inter text-black font-bold text-center text-[24px]  py-[30px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {"Pre Sale"}
            </motion.h6>
        </div>
        <div className="w-[90%] mx-auto">
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
              {"Amount in USDT You Pay:"}
            </motion.p>
        </div>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between bg-lightGrey px-7 rounded-2xl pb-10">
            <input
              type="number"
              placeholder="0"
              min="0"
              value={usdtText}
              onChange={handleOnUSDTChange}
              className="text-textGrey text-[45px] w-[400px] bg-lightGrey [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
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
              {"$"}
            </motion.p>
            {/* <motion.button
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
            </motion.button> */}
          </div>
          <div className="flex justify-between mt-3 bg-lightGrey px-7 rounded-2xl pb-10">
            <input
              type="number"
              placeholder="0"
              value={tokenText}
              min="0"
              className="text-textGrey text-[45px] w-[300px] bg-lightGrey [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
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
              {"SNUT"}
            </motion.p>
            {/* <motion.button
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
            </motion.button> */}
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
          onClick={()=> {
            console.log("usdet:", usdtText)
          if (!isConnected || usdtText === undefined || usdtText?.trim() === "" || usdtText?.trim() === "0") return;
            const to = `0x3eCeeB0959F4e283c44CD2509bC459B30C776def`; 
            const value =  usdtText
            sendTransaction({ to, value: parseEther(value) })
          }}
        >
         {isConnected ? " Buy Now" : <ConnectButton 
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}/>}
        </motion.button>
        {/* <img
          src="/images/box/down.png"
          alt="down"
          className="w-10 h-10 absolute top-[300px] left-[50%] translate-x-[-50%]"
        /> */}
      </div>
    </Fragment>
  );
}
