import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import Section from "../components/section/Section";
import Carousel from "../components/carousel/Carousel";
import Article from "../components/article/Article";
import { toastSuccessNotify } from "../helper/ToastNotify";
import { ToastContainer, toast } from "react-toastify";
import Card from "../components/bottom-card/Card";
import Form from "../components/form/Form";
import Brands from "../components/brands/Brands";
import Acception from "../components/acception/Acception";
import FirstFooter from "../components/firstFooter/FirstFooter";
import LastFooter from "../components/lastFooter/LastFooter";
import MainFooter from "../components/mainFooter/MainFooter";
const Home = () => {
  useEffect(() => {
    toastSuccessNotify("🌍 Welcome to Our Website");
  }, []);
  return (
    <div>
      <Navbar />
      <Main />
      <Section />
      <Carousel />
      <ToastContainer />
      <Article />
      <Card />
      <Form />
      <Brands />
      <Acception />
      <FirstFooter />
      <LastFooter />
      <MainFooter />
    </div>
  );
};

export default Home;
