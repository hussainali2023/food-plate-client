import React from "react";

const Description = () => {
  return (
    <div className="md:gap-6 text-white bg-gray-700 md:p-12 p-2 m-3 md:mx-16 md:my-10 rounded-md">
      <h1 className=" text-2xl md:text-6xl font-extrabold uppercase text-center">
        Review at <span className=" text-yellow-500 ">Food Plate!</span>
      </h1>
      <p className="mt-4 md:mt-8 text-clip md:text-center font-medium md:text-lg">
        This is one of the best website to buy food. Reviews on your best food.
        Some of our best dishes are Chicken pot pie, Mashed potatoes, <br />{" "}
        Fried chicken, Burgers (with an option to add cheese/ bacon) Chicken
        soup, Meatloaf, Lasagna, Spaghetti with meatballs etc.
      </p>
    </div>
  );
};

export default Description;
