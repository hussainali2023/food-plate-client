import React from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food);
  console.log("ki je hocche eisob");
  return (
    <div>
      <h1 className=" text-7xl mx-auto">
        This is from Food Details Page{food.foodName}
      </h1>
    </div>
  );
};

export default FoodDetails;
