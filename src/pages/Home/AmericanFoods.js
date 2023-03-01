import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import food1 from "../../assests/bannerPhoto.jpg";

const AmericanFoods = () => {
  // const { data: americanFoods, isLoading } = useQuery({
  //   queryKey: ["category"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/foods/american");
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // // console.log(categories);
  // if (isLoading) {
  //   return <p>Loading....</p>;
  // }

  // // console.log(foods);
  // console.log(americanFoods);

  const [americanFoods, setAmericanFoods] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/foods/american")
      .then((res) => res.json())
      .then((data) => setAmericanFoods(data));
  }, []);

  return (
    <div className="lg:mx-16 mx-2 mt-4 md:mt-8">
      <p className=" text-4xl font-bold text-yellow-600 mb-6 md:mb-9">
        {" "}
        American Foods
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {americanFoods?.map(
          (
            americanFood //.slice(3, 6)
          ) => (
            <div
              key={americanFood?._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <PhotoProvider>
                <PhotoView src={americanFood?.foodPhoto}>
                  <img
                    src={americanFood?.foodPhoto}
                    alt="Example image"
                    className="w-full h-48 object-cover"
                  />
                </PhotoView>
              </PhotoProvider>

              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  {americanFood?.foodName}
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
                  ${americanFood.foodPrice}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {americanFood?.foodDescription?.slice(0, 100) + "..."}
                </p>
                <div className=" flex justify-center">
                  <Link
                    to={`/foods/${americanFood?._id}`}
                    href="/"
                    className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Details
                  </Link>
                </div>
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

export default AmericanFoods;
