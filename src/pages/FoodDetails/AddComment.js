// import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
// import { toast } from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const AddComment = ({ food }) => {
  //   console.log(food);
  const { user } = useContext(AuthContext);
  const date = new Date().toJSON().slice(0, 10);
  //   console.log(date);
  //   //   console.log(user);
  //   const [feedback, setFeedback] = useState([]);
  const [rating, setRating] = useState([]);
  const ratingChanged = (newRating) => {
    setRating(newRating);
    // console.log(newRating);
  };

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  //   const navigate = useNavigate();

  const handleAddReview = (data) => {
    if (rating < 1) {
      alert("Please give atleast one star rating");
      return;
    }
    if (!user?.uid) {
      alert("Please Login First to give a review");
      return;
    }
    // console.log(data);
    const feedback = {
      feedback: data.reviewMessage,
      // sellerName: user.displayName,
      email: user.email,
      post_date: date,
      rating: rating,
      // conditionType: data.conditionType,
      // companyName: data.companyName,
      foodName: food.foodName,
      name: data.name,
      // photo: imgData.data.url,
      // originalPrice: data.originalPrice,
      // salePrice: data.salePrice,
      // location: data.location,
      // usage: data.usage,
    };
    // console.log(phone);
    fetch("https://food-plate-server-hussainali2023.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Your Feedback Successfully Submitted.");
        // refetch();
        // navigate("/dashboard/my-product");
      });
    console.log(feedback);
  };

  return (
    <div className="  border border-gray-400">
      <form action="" onSubmit={handleSubmit(handleAddReview)}>
        <div className=" mx-6">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={50}
            activeColor="#ffd700"
          />
        </div>
        <input
          {...register("name")}
          type="text"
          className=" mx-10 my-4 px-4 py-2 w-10/12"
          placeholder="Enter your Name"
          required
        />
        <textarea
          name="feedback"
          {...register("reviewMessage")}
          id=""
          cols="70"
          rows="5"
          className=" m-10 px-4 py-2"
          placeholder="Write Your Review"
          required
        ></textarea>
        <div className=" flex justify-center">
          {" "}
          {/* {user?.uid ? ( */}
          {/* <> */}
          <button
            className=" bg-emerald-700 rounded-3xl border-2 border-emerald-700 hover:text-emerald-700 hover:bg-gray-100 px-6 py-3 text-white font-semibold"
            type="submit"
          >
            Submit Review
          </button>
          {/* </>
          ) : (
            <>
              <div>
                <button className=" bg-yellow-300 px-6 py-3 text-white font-semibold">
                  Submit Review
                </button>
              </div>

              <div className=" ml-6">
                {" "}
                <h1>Please Login to give a review</h1>
              </div>
            </>
          )} */}
        </div>
      </form>
    </div>
  );
};

export default AddComment;
