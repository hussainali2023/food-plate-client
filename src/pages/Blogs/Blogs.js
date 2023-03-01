import React from "react";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";
import testImage from "../../assests/orange-chicken-2-1673367967.jpg";
import authorImage from "../../assests/istockphoto-1289220781-612x612.jpg";

const Blog = () => {
  DynamicTitle("Blog");
  return (
    <div className=" my-10 md:mx-16 grid grid-cols-2 bg-emerald-700">
      {/* image section  */}
      <div>
        <img src={testImage} alt="" />
      </div>
      <div className=" text-center my-10">
        <h1 className=" text-3xl font-bold text-yellow-400">
          Perfect Homemade waffles
        </h1>
        <p className=" text-white text-lg text-justify px-6 mt-5">
          This waffle recipe is the only one you'll need to make homemade
          waffles with your waffle iron. Simple pantry ingredients mix up
          quickly in this easy batter that can be used right away or stored in
          .......
        </p>
        {/* ----------author pictures---------- */}
        <div className=" ml-6 flex mt-10 text-white">
          <img
            src={authorImage}
            alt=""
            className=" w-12 h-12 rounded-full mr-3"
          />
          <div>
            {/* --------Author Name------------  */}
            <li className=" list-none">Author Name</li>
            <li className="list-none">Date and Time</li>
          </div>
          <button
            className=" ml-96 bg-yellow-500 hover:bg-emerald-700 rounded-3xl border-2 border-yellow-500 px-6 py-3 text-white font-semibold"
            type="submit"
          >
            Full Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
