import React from "react";
import Bean from "../../assests/bean.jpg";

const PickOfTheWeek = () => {
  return (
    <div className=" bg-emerald-700 rounded-md bg- mx-2 md:mx-16 my-8 md:my-20 grid md:grid-cols-2 grid-cols-1">
      <div className=" my-6 md:my-16 flex justify-center align-middle">
        <div className="text-center my-auto">
          <p className=" text-sm md:text-lg mb-3 md:mb-10 text-white ">
            PICK OF THE WEEK
          </p>
          <h1 className=" text-yellow-400 text-xl md:text-4xl font-bold mb-4 md:mb-10">
            Fire-Roasted Tomato & <br /> Mung Bean Soup
          </h1>
          <p className=" text-xs md:text-base text-white px-4">
            Easy, 10-ingredient vegetable soup with fire-roasted tomatoes, tons
            of <br /> vegetables, and detoxifying mung beans! A hearty soup for
            the colder <br /> months that's entirely vegan and gluten-free!
          </p>
        </div>
      </div>
      <div>
        <img src={Bean} alt="" />
      </div>
    </div>
  );
};

export default PickOfTheWeek;
