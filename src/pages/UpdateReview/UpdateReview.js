import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const reviews = useLoaderData();
  const [users, setUsers] = useState([]);
  const [review] = reviews;
  console.log(review);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://photographer-server-eta.vercel.app/reviews/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Your Review updated successfully");
        } else {
          toast.error("At least update one");
        }
        // console.log(data);
      });
  };

  const handleInput = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newUsers = { ...users };
    newUsers[field] = value;
    // console.log(newUsers);
    setUsers(newUsers);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        id="feedbackForm"
        action=""
        method=""
        className=""
      >
        <div className="mb-3">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Name
          </label>
          <input
            defaultValue={review.name}
            onBlur={handleInput}
            type="text"
            name="name"
            id="name"
            className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
            placeholder=" "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            defaultValue={review.email}
            onBlur={handleInput}
            type="email"
            name="email"
            id="email"
            className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
            placeholder=" "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Photo URL
          </label>
          <input
            defaultValue={review.photoURL}
            onBlur={handleInput}
            type="text"
            name="photoURL"
            id="photoURL"
            className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
            placeholder=" "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Service Id
          </label>
          <input
            defaultValue={review.serviceId}
            onBlur={handleInput}
            type="text"
            name="serviceId"
            id="serviceId"
            className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
            placeholder=" "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
            Message
          </label>
          <textarea
            defaultValue={review.message}
            onBlur={handleInput}
            name="message"
            id="feedback"
            className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-3/4"
            placeholder=""
            required
          ></textarea>
        </div>
        <div className="mt-2 flex justify-center">
          <button
            id="feedbackBtn"
            className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
