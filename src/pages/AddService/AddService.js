import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";

const AddService = () => {
  DynamicTitle("Add-Service");
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("https://photographer-server-eta.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User added successfully");
          event.target.reset();
        }
      });
  };

  const handleInput = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    // <div className=" w-3/4 mx-auto mt-3 mb-8">
    //   <form
    //     onSubmit={handleSubmit}
    //     id="feedbackForm"
    //     action=""
    //     method=""
    //     className=""
    //   >
    //     <div className="mb-3">
    //       <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
    //         Service Name
    //       </label>
    //       <input
    //         onBlur={handleInput}
    //         type="text"
    //         name="serviceName"
    //         id="serviceName"
    //         className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
    //                 bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
    //         placeholder=" "
    //         required
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
    //         Short Name
    //       </label>
    //       <input
    //         onBlur={handleInput}
    //         type="text"
    //         name="shortName"
    //         id="shortName"
    //         className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
    //                 bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
    //         placeholder=" "
    //         required
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
    //         Photo URL
    //       </label>
    //       <input
    //         onBlur={handleInput}
    //         type="text"
    //         name="photo"
    //         id="photo"
    //         className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
    //                 bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
    //         placeholder=" "
    //         required
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
    //         Price
    //       </label>
    //       <input
    //         onBlur={handleInput}
    //         type="text"
    //         name="price"
    //         id="price"
    //         className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
    //                 bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
    //         placeholder=" "
    //         required
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
    //         Description
    //       </label>
    //       <textarea
    //         onBlur={handleInput}
    //         name="description"
    //         id="description"
    //         className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-3/4"
    //         placeholder=""
    //         required
    //       ></textarea>
    //     </div>
    //     <div className="mt-2 flex justify-center">
    //       <button
    //         id="feedbackBtn"
    //         className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
    //         type="submit"
    //       >
    //         Add Service
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div>This is Add Service</div>
  );
};

export default AddService;
