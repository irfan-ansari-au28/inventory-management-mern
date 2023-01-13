import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh color="white" />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd color="white" />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FaRegChartBar color="white" />,
    children: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt color="white" />,
    path: "/contact-us",
  },
];

export default menu;
