import { useQuery } from "@tanstack/react-query";
import React from "react";
// import { Navigate } from "react-router-dom";

const ShowReviews = ({ food }) => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        `https://food-plate-server-hussainali2023.vercel.app/reviews/foods/${food?.foodName}`
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log(reviews);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(reviews);
  return (
    <div className=" mx-2 lg:mx-16">
      {reviews?.map((review) => (
        <div
          key={review._id}
          className="mb-5 md:mb-7 shadow-lg rounded-t-xl lg:rounded-t-8xl lg:rounded-b-5xl rounded-b-xl overflow-hidden"
        >
          <div className="pt-3 pb-3 md:pb-1 px-4 md:px-4 bg-white bg-opacity-40">
            <div className=" flex flex-wrap items-center">
              <img
                className="mr-6"
                src="uinel-assets/images/ecommerce-reviews/user3.png"
                alt=""
              />
              <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                {review?.name}
              </h4>
              <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
              <span className="mr-4 text-xl font-heading font-medium">
                {review?.rating}
              </span>
              <div className="flex">
                <a className="inline-block mr-1" href=" ">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
                <a className="inline-block mr-1" href=" ">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
                <a className="inline-block mr-1" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
                <a className="inline-block mr-1" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
                <a className="inline-block text-gray-200" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
              <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                {review?.foodName}
              </h4>
            </div>
          </div>
          <div className="px-4 md:px-16 pt-8 pb-12 bg-white">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 mb-6 md:mb-0">
                <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                  {review?.feedback}
                </p>
              </div>
              <div className="w-full md:w-1/3 text-right">
                <p className="mb-8 text-sm text-gray-600">
                  {review?.post_date}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowReviews;
