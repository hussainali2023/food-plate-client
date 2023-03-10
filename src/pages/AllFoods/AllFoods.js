import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";
// import Service from "./Services";

const AllFoods = () => {
  DynamicTitle("Foods");
  const { data: foods, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        "https://food-plate-server-hussainali2023.vercel.app/foods"
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log(categories);
  if (isLoading) {
    return <p>Loading....</p>;
  }

  console.log(foods);
  return (
    <>
      <div className="lg:mx-16 mx-2 mt-4 md:mt-8 mb-6 md:mb-10">
        {/* <p className=" text-center text-4xl font-bold text-yellow-600 mb-6 md:mb-9">
          {" "}
          Here are some Delicious foods
        </p> */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {foods?.map((food) => (
            <div
              key={food._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <PhotoProvider>
                <PhotoView src={food.foodPhoto}>
                  <img
                    src={food?.foodPhoto}
                    alt="Example image"
                    className="w-full h-48 object-cover"
                  />
                </PhotoView>
              </PhotoProvider>

              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{food?.foodName}</h2>
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
                  ${food?.foodPrice}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {food?.foodDescription?.slice(0, 100) + "..."}
                </p>
                <div className=" flex justify-center">
                  <Link
                    to={`/foods/${food?._id}`}
                    href="/"
                    className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllFoods;
