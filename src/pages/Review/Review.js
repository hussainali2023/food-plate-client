import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = ({ service }) => {
  const { shortName } = service;
  // console.log(service);
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  // console.log(users);
  console.log(reviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://photographer-server-eta.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully");
          e.target.reset();
        }
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

  // console.log(`http:localhost:5000/reviews/${shortName}`);

  useEffect(() => {
    fetch(`https://photographer-server-eta.vercel.app/reviews/`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [shortName]);

  // console.log(users);
  // console.log(reviews);

  return (
    <div>
      <div>
        {user?.uid ? (
          <div className=" mb-4 md:mb-10">
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
                  onBlur={handleInput}
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
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
                  Short Name
                </label>
                <input
                  onBlur={handleInput}
                  type="text"
                  name="serviceId"
                  id="serviceId"
                  defaultValue={shortName}
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className=" mb-4 md:mb-10">
            <h1 className=" text-center text-2xl font-semibold">
              {" "}
              Please Login To Add a Review
            </h1>
            <div className=" flex justify-center mt-3">
              <Link to={"/login"}>
                <button className=" px-6 py-2 bg-violet-400 text-white font-semibold rounded-md">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div>
        {reviews.map((review) => (
          <div
            key={review._id}
            className=" container mb-5 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={review.photoURL}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                ></svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
              <p>{review.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
