import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";

const MyReviews = () => {
  DynamicTitle("My-Reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);

  useEffect(() => {
    fetch(`https://photographer-server-eta.vercel.app/reviews/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (review) => {
    fetch(`https://photographer-server-eta.vercel.app/reviews/${review._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaingReviews = reviews.filter(
            (usr) => usr._id !== review._id
          );
          setReviews(remaingReviews);
        }
      });
    toast.success("Review deleted successfully");
  };
  return (
    <>
      {/* <div className=" w-11/12 mx-auto my-6">
      {reviews.length < 1 ? (
        <h1 className=" text-center text-3xl font-bold text-violet-500">
          {" "}
          No reviews were added
        </h1>
      ) : (
        <>
          {reviews.map((review) => (
            <div className="grid grid-cols-2">
              <div
                key={review._id}
                className="mb-6 container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                  <p>{review.message}</p>
                </div>
              </div>
              <div className="mt-10">
                <Link to={"/update"}>
                  <button className=" py-2 px-6 bg-violet-500 mb-4 font-bold text-white rounded-md">
                    Update
                  </button>
                </Link>

                <br />
                <button
                  onClick={() => handleDelete(review)}
                  className=" py-2 px-7 bg-orange-400 font-bold text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div> */}
      This is my review page under developement
    </>
  );
};

export default MyReviews;
