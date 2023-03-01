// import { useQuery } from "@tanstack/react-query";
import React from "react";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import { Link } from "react-router-dom";
// import food1 from "../../assests/bannerPhoto.jpg";
import IndianFoods from "./IndianFoods";
import ItaliyanFoods from "./ItaliyaFoods";

const Cards = () => {
  return (
    <div>
      <IndianFoods />
      <ItaliyanFoods />
    </div>
  );
};

export default Cards;
