import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  if (item.children) {
    <div>
      {item.children.map((child, index) => {
        return (
          <div key={index}>
            <Link to={child.path}>
              <div>{child.title}</div>
            </Link>
          </div>
        );
      })}
    </div>;
  } else {
    return (
      <Link to={item.path}>
        <ul key={item.title} className="mb-4 flex flex-col gap-1">
          <li className="mx-3.5 mt-4 mb-2 flex items-center justify-center ">
            {item.icon}
            <Typography
              variant="small"
              color={"white"}
              className="font-black uppercase opacity-75 ml-2"
            >
              {item.title}
            </Typography>
          </li>
        </ul>
      </Link>
    );
  }
};

export default SidebarItem;
