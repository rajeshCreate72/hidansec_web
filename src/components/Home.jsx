import React from "react";
import NavBar from "./NavBar";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </div>
  );
}

export default Home;
