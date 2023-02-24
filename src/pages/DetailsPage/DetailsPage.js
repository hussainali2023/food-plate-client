import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";
import Review from "../Review/Review";
import { PhotoProvider, PhotoView } from "react-photo-view";

const DetailsPage = () => {
  DynamicTitle("Details");
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(service);
  return (
    // <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-4">
    //   <div className="course-details md:ml-10">
    //     <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-md">
    //       <div className="space-y-4">
    //         <div className="space-y-2">
    //           <PhotoProvider>
    //             <PhotoView src={service.photo}>
    //               <img
    //                 src={service.photo}
    //                 alt=""
    //                 className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
    //               />
    //             </PhotoView>
    //           </PhotoProvider>
    //         </div>
    //         <div className="space-y-2">
    //           <a rel="noopener noreferrer" href="/" className="block">
    //             <h3 className="text-xl font-semibold dark:text-violet-400">
    //               {service.serviceName}
    //             </h3>
    //           </a>
    //           <p>Price: ${service.price}</p>
    //           <p className="leading-snug dark:text-gray-400">
    //             {service.description}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="Review Section w-11/12 mx-auto">
    //     <h1 className="mb-4 text-2xl text-violet-500 font-bold">
    //       {" "}
    //       Please add a Review of this service
    //     </h1>
    //     <Review service={service}></Review>
    //   </div>
    // </div>
    <div>This is Detail Page</div>
  );
};

export default DetailsPage;
