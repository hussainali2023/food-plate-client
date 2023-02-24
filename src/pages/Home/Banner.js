import React from "react";
import bannerPhoto from "../../assests/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
      <div className=" bg-gradient-to-tr bg-gray-800 to-gray-800">
        <div className="bg-photo">
          <img
            src={bannerPhoto}
            alt=""
            className="bg-image object-cover mix-blend-overlay "
          />
        </div>
        <div className="bg-content text-white">
          <h1 className="text-yellow-300 lg:text-7xl text-xl font-bold title">
            Delicious Delights
          </h1>
          <p className=" md:text-2xl text-md font-semibold md:mt-4">
            Good food, Good mood
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
