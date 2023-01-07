import React from "react";

const Sidebar = ({ children }) => {
  return (
    <>
      <div
        className={
          "bg-gradient-to-br p-4 from-blue-gray-800 to-blue-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0"
        }
      >
        Sidebar
      </div>
      <main>{children}</main>
    </>
  );
};

export default Sidebar;
