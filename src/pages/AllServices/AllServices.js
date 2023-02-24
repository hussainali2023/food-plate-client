import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";
import Service from "./Services";

const AllServices = () => {
  DynamicTitle("Services");
  const services = useLoaderData();
  // console.log(services);
  return (
    <>
      {/* <div className=" mx-4 my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div> */}
      This is all services
    </>
  );
};

export default AllServices;
