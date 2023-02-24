import React from "react";
import { Link } from "react-router-dom";
import food1 from "../../assests/bannerPhoto.jpg";

const Cards = () => {
  return (
    <div className="lg:mx-16 mx-2 mt-4 md:mt-8">
      <p className=" text-center text-4xl font-bold text-yellow-600 mb-6 md:mb-9">
        {" "}
        Here are some Delicious foods
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={food1}
            alt="Example image"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">Product Title</h2>
            <div class="flex mb-2">
              <svg
                class="w-4 h-4 fill-current text-yellow-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <svg
                class="w-4 h-4 fill-current text-yellow-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <svg
                class="w-4 h-4 fill-current text-yellow-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <svg
                class="w-4 h-4 fill-current text-yellow-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <svg
                class="w-4 h-4 fill-current text-gray-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 13.66l-4.18 2.28 1-4.63L1.56 8.84l4.63-.4L10 3.27l2.81 5.17 4.63.4-3.26 2.77 1 4.63z"></path>
              </svg>
              <span class="text-gray-600 ml-2">(123)</span>
            </div>
            <p class="text-lg text-gray-800 font-bold mb-2">$99.99</p>
            <p class="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className=" flex justify-center">
              <Link
                href="/"
                class="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* See all button  */}
      <div className=" flex justify-center">
        <Link
          href="/"
          class="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Cards;
