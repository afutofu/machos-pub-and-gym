import React, { useState } from "react";

import classes from "./Main.module.css";

import Navbar from "../../components/Navbar/Navbar";
import ReservationModal from "../../components/ReservationModal/ReservationModal";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Menu from "../../pages/Menu/Menu";
import Gym from "../../pages/Gym/Gym";
import About from "../../pages/About/About";
import Gallery from "../../pages/Gallery/Gallery";
import Contact from "../../pages/Contact/Contact";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onReserveModalOpen = () => {
    setIsModalOpen(true);
  };

  const onReserveModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar onReserveModalOpen={onReserveModalOpen} />
      <div className={classes.Main}>
        <ReservationModal
          isOpen={isModalOpen}
          onReserveModalClose={onReserveModalClose}
        />
        <ImageSlider />
        <div className={classes.Margin}>
          <Menu />
          <Gym />
          <About />
          <Gallery />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Main;