import React from "react";
import { RotatingLines } from "react-loader-spinner";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div
      style={{
        backgroundColor: "#00000040",
        width: "100%",
        height: "100vh",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 20,
      }}
    >
      <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className="flex items-center justify-center pb-4">
      <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="24"
        visible={true}
      />
    </div>
  );
};

export default Loader;
