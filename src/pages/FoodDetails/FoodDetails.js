import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import AddComment from "./AddComment";

const FoodDetails = () => {
  const food = useLoaderData();
  // console.log(food);
  // console.log("ki je hocche eisob");
  return (
    <div className=" lg:mx-16 mx-2 mt-4 md:mt-8 mb-6 md:mb-10 grid grid-cols-2 gap-10">
      <div>
        {/* <p className=" text-center text-4xl font-bold text-yellow-600 mb-6 md:mb-9">
          {" "}
          Here are some Delicious foods
        </p> */}
        <div
          key={food._id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <PhotoProvider>
            <PhotoView src={food.foodPhoto}>
              <img src={food.foodPhoto} alt="Example image" />
            </PhotoView>
          </PhotoProvider>

          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{food.foodName}</h2>
            {/* ------------Fake Rating Stars Starts------------ */}
            <div className="flex mb-2">
              <svg
                className="w-4 h-4 fill-current text-yellow-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <svg
                className="w-4 h-4 fill-current text-gray-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <span className="text-gray-600 ml-2"></span>
            </div>
            {/* ------------Fake Rating Stars End------------ */}
            <p className="text-lg text-gray-800 font-bold mb-2">
              ${food.foodPrice}
            </p>
            <p className="text-gray-600 text-sm mb-4">{food.foodDescription}</p>
          </div>
        </div>
      </div>
      <AddComment food={food} />
    </div>
  );
};

export default FoodDetails;
