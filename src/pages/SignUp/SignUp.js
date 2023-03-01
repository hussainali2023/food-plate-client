import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";
// import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  DynamicTitle("SignUp");
  const { createUser } = useContext(AuthContext);

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignup = (e) => {
    // console.log(name, email, password);

    createUser(e.email, e.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        toast.success("Congratulations You are successfully Registered");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // console.log(errorMessage);
        // ..
      });
  };
  return (
    <div>
      <section>
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="/"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <h1 className=" text-center text-emerald-700 font-bold text-3xl mb-6">
                Please Register
              </h1>
              <form onSubmit={handleSubmit(handleSignup)}>
                <div className="mb-4">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is Required" })}
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-emerald-700 border-2 border-emerald-700 hover:bg-gray-100 text-white hover:text-emerald-700 font-medium text-sm leading-snug uppercase rounded shadow-md  transition duration-150 ease-in-out w-full"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-2">
                Already Have an Account?{" "}
                <Link to="/login" className=" text-blue-700 font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
