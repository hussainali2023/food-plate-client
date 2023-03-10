import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { Divider, Placeholder } from "rsuite";
import Aos from "aos";
import "aos/dist/aos.css";

const IndianFoods = () => {
  const [indianFoods, setIndianFoods] = useState();
  useEffect(() => {
    fetch("https://food-plate-server-hussainali2023.vercel.app/foods/indian")
      .then((res) => res.json())
      .then((data) => setIndianFoods(data));
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="lg:mx-16 mx-2 mt-14 md:mt-20" data-aos="zoom-in">
      <p className=" text-2xl md:text-4xl font-bold text-emerald-800 mb-6 md:mb-9">
        {" "}
        <p className="indian">
          <span className="indianText">Indian Foods</span>
        </p>
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {indianFoods?.map(
          (
            food //.slice(3, 6)
          ) => (
            <div
              data-aos="flip-left"
              key={food?._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <PhotoProvider>
                <PhotoView src={food?.foodPhoto}>
                  <img
                    src={food?.foodPhoto}
                    alt="Example image"
                    className="w-full h-48 object-cover"
                  />
                </PhotoView>
              </PhotoProvider>

              <div className="p-4">
                <h2 className=" text-lg md:text-xl font-bold mb-2">
                  {food?.foodName}
                </h2>
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
                <p className="text-gray-600 text-sm mb-4">
                  {food?.foodDescription?.slice(0, 100) + "..."}
                </p>
                <div className="card-body">
                  {/* <h2 className="card-title text-center">{category.companyName}</h2> */}
                  <div className="justify-center mt-4">
                    <Link to={`/foods/${food?._id}`}>
                      <button className=" btn bg-emerald-700 hover:bg-white hover:text-emerald-700 hover:font-medium  py-2 border-2 border-emerald-700 rounded-3xl text-white w-full">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
                {/* <div className=" flex justify-center">
                  <Link
                    to={`/foods/${food?._id}`}
                    href="/"
                    className=" bg-emerald-800 btn hover:bg-yellow-400 border-0 text-white w-full"
                  >
                    Details
                  </Link>
                </div> */}
              </div>
            </div>
          )
        )}
      </div>
      {/* See all button  */}
      {/* <div className=" flex justify-center mt-6">
        <Link
          to={"/all-foods"}
          className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          See All
        </Link>
      </div> */}
    </div>
  );
};

export default IndianFoods;
