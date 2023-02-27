import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
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

  //   const result = (form) => {
  //     form.preventDefault();
  //     const feedbackWithRating = {
  //       feedbackMessage: feedback,
  //       rating: rating,
  //       email: user.email,
  //       date: date,
  //       foodName: food.foodName,
  //     };
  //     console.log(feedbackWithRating);
  //   };

  //   const handleInput = (e) => {
  //     e.preventDefault();
  //     const feedbackMessage = e.target.value;
  //     setFeedback(feedbackMessage);
  //     // console.log(feedbackMessage);
  //   };
  //   const { isLoading, refetch } = useQuery({
  //     queryKey: [""],
  //     queryFn: async () => {
  //       const res = await fetch("");
  //       const data = await res.json();
  //       return data;
  //     },
  //   });

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  //   const navigate = useNavigate();

  const handleAddReview = (data) => {
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
      // photo: imgData.data.url,
      // originalPrice: data.originalPrice,
      // salePrice: data.salePrice,
      // location: data.location,
      // usage: data.usage,
    };
    // console.log(phone);
    // fetch("https://purana-phone-server.vercel.app/products", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(feedback),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     toast.success("New Phone Added Successfully");
    //     refetch();
    //     navigate("/dashboard/my-product");
    //   });
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
        <textarea
          name="feedback"
          {...register("reviewMessage")}
          id=""
          cols="70"
          rows="5"
          className=" m-10 px-4 py-2"
          placeholder="Write Your Review"
        ></textarea>
        <div className=" flex justify-center">
          {" "}
          <button
            className=" bg-yellow-300 px-6 py-3 text-white font-semibold"
            type="submit"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
