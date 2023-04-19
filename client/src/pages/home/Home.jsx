import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
