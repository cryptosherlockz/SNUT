import React from "react";
import { Main } from "./Pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
