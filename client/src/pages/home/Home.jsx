import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
