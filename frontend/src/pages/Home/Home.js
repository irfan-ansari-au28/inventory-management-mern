import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen w-full">
        <div className="container relative z-40 mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div>LOGO</div>
            <div className="flex items-center justify-center">
              <button className="ml-4 mt-6 rounded-lg border-2 border-solid bg-blue-600  px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none  lg:w-auto">
                <Link to="/register">Register</Link>
              </button>
              <button className="border-1 border-1 border-1 border-1 ml-4 mt-6 rounded-lg border-2  border-solid border-slate-800 bg-white px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-gray-800 hover:bg-blue-500 hover:text-white focus:outline-none lg:w-auto">
                <Link to="/login">Login</Link>
              </button>
              {/* <button className="border-1 border-1 ml-4 mt-6 rounded-lg border-2 border-solid border-slate-800 bg-white  px-6 py-2.5 text-center text-sm font-medium capitalize leading-5  text-gray-800 hover:bg-blue-500 hover:text-white  focus:outline-none lg:w-auto">
                <Link to="/dashboard">Dashboard</Link>
              </button> */}
            </div>
          </nav>
          <div className="my-16 flex flex-col items-center justify-center">
            <div className="mx-auto flex max-w-lg flex-col items-center justify-center">
              <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                Building Your Next App with our Awesome components
              </h1>
              <p className="mt-6 text-center text-gray-500  dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                similique obcaecati illum mollitia.
              </p>
              <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
                <Link to="/dashboard">Start 14-Day free trial</Link>
              </button>
              <p className="mt-3 text-sm text-gray-400">
                No credit card required
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <img
                alt="img"
                className="h-96 w-full rounded-xl object-cover lg:w-4/5"
                src={
                  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
