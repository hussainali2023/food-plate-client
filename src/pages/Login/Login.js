import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";

const Login = () => {
  DynamicTitle("Login");

  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";

  const handleSignIn = (e) => {
    // console.log(email, password);
    signInUser(e.email, e.password)
      .then((result) => {
        // Signed in
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        toast.success("Congratulations Login Successfull");

        // jwt token
        fetch("https://photographer-server-eta.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
            // form.reset();
          });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // console.log(errorMessage);
      })
      .finally(() => {});
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    googleSignIn(provider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        toast.success("Congratulations Login Successfull");
        // navigate("/");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // console.log(errorMessage);
      });
  };

  return (
    //     <div className="md:flex justify-evenly bg-green-700">
    //       <div>
    //         <img
    //           src="https://web.programming-hero.com/static/media/man-with-laptop.331dfa07.png"
    //           alt=""
    //         />
    //       </div>
    //       <div className="flex justify-center">
    //         <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:text-white">
    //           <h1 className="text-2xl font-bold text-center">Login</h1>
    //           <form
    //             onSubmit={handleSignIn}
    //             noValidate=""
    //             action=""
    //             className="space-y-6 ng-untouched ng-pristine ng-valid"
    //           >
    //             <div className="space-y-1 text-sm">
    //               <label htmlFor="email" className="block dark:text-white">
    //                 Email
    //               </label>
    //               <input
    //                 type="text"
    //                 name="email"
    //                 id="email"
    //                 placeholder="Enter Your Email"
    //                 className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:dark:border-violet-400"
    //                 required
    //               />
    //             </div>
    //             <div className="space-y-1 text-sm">
    //               <label htmlFor="password" className="block dark:text-white">
    //                 Password
    //               </label>
    //               <input
    //                 type="password"
    //                 name="password"
    //                 id="password"
    //                 placeholder="Password"
    //                 className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:dark:border-violet-400"
    //                 required
    //               />
    //               <div className="flex justify-end text-xs dark:text-white">
    //                 <p className="cursor-pointer">Forgot Password?</p>
    //               </div>
    //             </div>
    //             <button
    //               type="submit"
    //               className="block w-full p-3 text-center rounded-sm text-white bg-yellow-400 font-medium"
    //             >
    //               Sign in
    //             </button>
    //           </form>
    //           <div className="flex items-center pt-4 space-x-1">
    //             <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    //             <p className="px-3 text-sm dark:text-white">
    //               Login with social accounts
    //             </p>
    //             <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    //           </div>
    //           <div className="flex justify-center space-x-4">
    //             <button
    //               onClick={handleGoogleSignIn}
    //               aria-label="Log in with Google"
    //               className="p-3 rounded-sm"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 32 32"
    //                 className="w-5 h-5 fill-current"
    //               >
    //                 <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
    //               </svg>
    //             </button>
    //           </div>
    //           <p className="text-xs text-center sm:px-6 dark:text-white">
    //             Don't have an account?
    //             <Link to={"/signup"} className="underline dark:text-white">
    //               Sign up
    //             </Link>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

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
                Please Login
              </h1>
              <p className="text-center text-red-700 font-semibold ">
                {loginError}
              </p>
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="mb-6">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-3">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-end mb-2">
                  <a
                    href="#/"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-emerald-700 hover:bg-green-100  text-white hover:text-emerald-700 font-medium text-sm leading-snug uppercase rounded shadow-md border-2 hover:border-emerald-700 transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
                <p className=" text-start mt-2">
                  New User?{" "}
                  <Link className=" text-blue-700 font-medium" to="/signup">
                    {" "}
                    Sign Up
                  </Link>
                </p>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
              </form>
              <button
                onClick={handleGoogleSignIn}
                className="inline-block px-7 py-3 bg-emerald-700 hover:bg-green-100  text-white hover:text-emerald-700 font-medium text-sm leading-snug uppercase rounded shadow-md border-2 hover:border-emerald-700 transition duration-150 ease-in-out w-full"
              >
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
