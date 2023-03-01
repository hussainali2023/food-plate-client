import React from "react";
import dinner from "../../assests/dinner.jpg";

const Dinner = () => {
  return (
    <div className=" mb-4 md:mb-10 mt-10 mx-2 md:mt-20 md:mx-16 rounded-md grid grid-cols-1">
      <div>
        <img src={dinner} alt="" />
      </div>
      <div className=" text-center py-8 bg-emerald-700 md:mr-2">
        <h1 className=" text-yellow-400 font-bold text-lg md:text-3xl mb-2 md:mb-4">
          Insanely Easy Weeknight Dinners For March
        </h1>
        <p className=" text-sm md:text-lg text-white">
          {" "}
          Find fun, delicious ideas to inspire you in the kitchen
        </p>
      </div>
    </div>
  );
};

export default Dinner;
