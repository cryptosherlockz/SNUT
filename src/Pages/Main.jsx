import React, { Fragment } from "react";
import {
  Hero,
  About,
  How,
  BuyBox,
  Tokenomics,
  Roadmap,
  Contact,
} from "../components";

export default function Main() {
  return (
    <Fragment>
      <Hero />
      <About />
      <How />
      <BuyBox />
      <Tokenomics />
      <Roadmap />
      <Contact />
    </Fragment>
  );
}
