import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full mx-auto">
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 text-gray-600">
        <ul className="flex  items-center justify-end  ">
          <Link to="">
            <li className="ml-3 ">About</li>
          </Link>
          <Link>
            <li className="ml-3 ">Privacy Policy</li>
          </Link>
          <Link>
            <li className="ml-3 ">Licensing</li>
          </Link>
          <Link to="">
            <li className="ml-3 ">contact us</li>
          </Link>
        </ul>
      </footer>
      <div></div>
    </div>
  );
};

export default Footer;
