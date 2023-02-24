import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";

const Login = () => {
  DynamicTitle("Login");

  const { signInUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email, password)
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
            form.reset();
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
    <div className="md:flex justify-evenly bg-green-700">
      <div>
        <img
          src="https://web.programming-hero.com/static/media/man-with-laptop.331dfa07.png"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:text-white">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleSignIn}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-white">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:dark:border-violet-400"
                required
              />
              <div className="flex justify-end text-xs dark:text-white">
                <p className="cursor-pointer">Forgot Password?</p>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm text-white bg-yellow-400 font-medium"
            >
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-white">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 dark:text-white">
            Don't have an account?
            <Link to={"/signup"} className="underline dark:text-white">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
