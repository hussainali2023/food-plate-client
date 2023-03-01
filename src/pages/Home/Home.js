import React from "react";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";
import AmericanFoods from "./AmericanFoods";
import Banner from "./Banner";
// import Cards from "./Cards";
import Description from "./Description";
import IndianFoods from "./IndianFoods";
import ItaliyanFoods from "./ItaliyaFoods";

const Home = () => {
  DynamicTitle("Food-Plate");
  // const services = useLoaderData();
  // console.log(services);
  return (
    <>
      <Banner />
      {/* <Cards></Cards> */}
      <IndianFoods />
      <ItaliyanFoods />
      <AmericanFoods />
      <Description />

      {/* <div>
        <img
          className=""
          src="https://img.freepik.com/free-photo/young-asian-man-with-camera-isolated-white-background-photographer-concept_231208-3767.jpg?w=2000"
          alt=""
        />
      </div>
      <h1 className=" text-violet-500 text-2xl ml-6 font-bold">
        Food Services:
      </h1>
      <div className=" mx-4 my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center ">
        <Link to={"/services"}>
          <button className=" bg-violet-500 py-2 px-7 rounded-md text-white font-semibold">
            See All
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <Gallery></Gallery>
      </div> */}
    </>
  );
};

export default Home;
