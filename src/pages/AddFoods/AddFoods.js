import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
// import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";

const AddService = () => {
  DynamicTitle("Add-Service");
  const [user, setUser] = useState({});

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const imgbbKey = "17d74797a64a4ed97d0982c31d95c223";
  const navigate = useNavigate();

  const handleAddFood = (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData);

          const food = {
            foodDescription: data.foodDescription,
            foodName: data.foodName,
            foodPrice: data.foodPrice,
            foodPhoto: imgData.data.url,
          };
          // console.log(phone);
          fetch("http://localhost:5000/foods", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(food),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("New Food Added Successfully");
              // refetch();
              navigate("/all-foods");
            });
        }
      });
  };

  return (
    <div className=" mx-16 my-10">
      <div className="  border border-gray-400">
        <form
          className=" mx-auto"
          action=""
          onSubmit={handleSubmit(handleAddFood)}
        >
          <input
            {...register("foodName")}
            type="text"
            className=" mx-10 my-4 px-4 py-2 w-10/12"
            placeholder="Enter Food Name"
            required
          />
          <input
            {...register("foodPrice")}
            type="text"
            className=" mx-10 my-4 px-4 py-2 w-10/12"
            placeholder="Enter Food Price"
            required
          />
          <div className=" mx-10 bg-white px-4 py-2 mr-48">
            <p className="mb-2 text-gray-400">Choose Food Photo</p>
            <label className="block shadow ">
              <span className="sr-only cursor-pointer">Choose File</span>
              <input
                {...register("image")}
                type="file"
                className="block cursor-pointer text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400"
              />
            </label>
          </div>
          <textarea
            name="foodDescription"
            {...register("foodDescription")}
            id=""
            cols="70"
            rows="5"
            className=" m-10 px-4 py-2 w-10/12"
            placeholder="Write Food Description"
            required
          ></textarea>
          <div className=" flex justify-center pb-4">
            {" "}
            {/* {user?.uid ? ( */}
            {/* <> */}
            <button
              className=" bg-yellow-300 px-6 py-3 text-white font-semibold"
              type="submit"
            >
              Submit
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
    </div>
  );
};

export default AddService;
