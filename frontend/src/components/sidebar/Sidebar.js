import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";
import SidebarItem from "./SidebarItem";
import menu from "../../data/sidebar";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className={`${""} bg-gradient-to-br p-4 from-blue-gray-300 to-blue-gray-200 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
      >
        <div className="flex items-center justify-between">
          <div className="" style={{}} onClick={goHome}>
            <RiProductHuntLine size={35} style={{ cursor: "pointer" }} />
          </div>

          <div className="" style={{ cursor: "pointer" }}>
            <HiMenuAlt3 />
          </div>
        </div>
        {menu.map((item) => {
          return <SidebarItem key={Math.random() * 100} item={item} />;
        })}
      </div>
      <main>{children}</main>
    </>
  );
};

export default Sidebar;
