import React, { Fragment } from "react";
import { contactLinks } from "../../data/constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Fragment>
      <div className="mt-[100px]">
        <motion.h1
          className="font-inter text-black text-center text-[45px] py-[30px] font-black"
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
          CONTACT
        </motion.h1>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          viewport={{ once: true, amount: 0.5 }}
          src="/images/contact/Masterlogo.png"
          alt="successkid"
          className="mx-auto w-[250px]"
        />
      </div>
      <div className="flex gap-5 mt-5 justify-center">
        {contactLinks.map((contact, idx) => {
          return (
            <motion.img
              initial={{ opacity: 0, translateY: "100px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{
                delay: idx * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, amount: 0.5 }}
              src={`/images/contact/${contact.image}.png`}
              alt={contact.tittle}
              key={contact.tittle}
              loading="lazy"
              className="w-16 h-16 cursor-pointer"
            />
          );
        })}
      </div>
      <motion.p
        className="mt-10 text-black font-black font-Comfortaa ss:w-[60%] w-[80%] mx-auto text-[15px] text-center"
        initial={{ opacity: 0, translateY: "100px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        $MASTER coin has no association with Sammy Griner (The Success Kid).
        This token is simply paying homage to an expression Sammy left in his
        childhood for generations to come. Thanks Sammy
      </motion.p>
      <motion.p
        className="mt-10 text-black font-black font-Comfortaa ss:w-[30%] w-[60%] mx-auto text-[15px] text-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        $MASTER is a meme coin till it reaches its Phase 3 of the roadmap See
        you at the end of Phase 3
      </motion.p>
    </Fragment>
  );
}
