import React from "react";
import Navbar from "../common/Navbar";
import Banner from "../components/home/Banner";
import Sound from "../components/home/Sound";
import Where from "../components/home/Where";
import Process from "../components/home/Process";
import Testimonals from "../components/home/Testimonals";
import Find from "../components/home/Find";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="2xl:w-[80%]">
        <Navbar />
        <Banner />
        <Sound />
        <Where />
        <Process />
        <Testimonals />
        <Find />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
