import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import AllServices from "../pages/AllServices/AllServices";
import Blogs from "../pages/Blogs/Blogs";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Review from "../pages/Review/Review";
import SignUp from "../pages/SignUp/SignUp";
import UpdateReview from "../pages/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://photographer-server-eta.vercel.app/services-home"),
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () =>
          fetch("https://photographer-server-eta.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(
            `https://photographer-server-eta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/reviews",
        element: <Review></Review>,
      },

      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://photographer-server-eta.vercel.app/reviews"),
      },
    ],
  },
]);
