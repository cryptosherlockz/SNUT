import React, { Fragment, useState } from "react";
import { navlinks } from "../data/constants";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="w-full flex py-3 bg-navBg justify-center items-center fixed top-0 z-10 gap-5">
        <motion.img
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true, amount: 0.5 }}
          src="/images/nav/SkNav.png"
          alt="sk-nav"
          loading="lazy"
          className="h-20"
        />
        <motion.div
          className="sm:flex hidden gap-5 text-white font-inter"
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {navlinks.map((nav) => {
            return (
              <a
                key={nav.tittle}
                className="cursor-pointer"
                href={`#${nav.tittle}`}
              >
                {nav.tittle}
              </a>
            );
          })}
        </motion.div>
        <motion.div
          className="text-white font-inter py-2 px-5 border  rounded-3xl cursor-pointer"
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Buy Now
        </motion.div>

        <img
          src={`/images/nav/${open ? "cross" : "select"}.svg`}
          className="cursor-pointer px-5 sm:hidden flex"
          alt="ham"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />
        {open && (
          <motion.div
            className="absolute w-full text-white font-inter bg-navBg mt-[320px] p-5 flex flex-col gap-5 -z-10"
            initial={{ opacity: 0, translateY: "-100%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.1,
              duration: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 14,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {navlinks.map((nav) => {
              return (
                <motion.a
                  initial={{ opacity: 0, translateY: "-100%" }}
                  whileInView={{ opacity: 1, translateY: "0%" }}
                  transition={{
                    delay: 0.1,
                    duration: 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  key={nav.tittle}
                  className="cursor-pointer text-center"
                  href={nav.tittle}
                >
                  {nav.tittle}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </div>
    </Fragment>
  );
}
