import {
  FaShoppingCart,
  FaDollarSign,
  FaMinusCircle,
  FaListUl,
} from "react-icons/fa";
const cartIcon = <FaShoppingCart size={24} />;
const currencyIcon = <FaDollarSign size={24} />;
const emptyIcon = <FaMinusCircle size={24} />;
const categoryIcon = <FaListUl size={24} />;

export const statisticsCardsData = [
  {
    color: "orange",
    icon: cartIcon,
    title: "Total Products",
    value: "4",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "green",
    icon: currencyIcon,
    title: "Total Store Value",
    value: "$2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "pink",
    icon: emptyIcon,
    title: "Out of Stock",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "blue",
    icon: categoryIcon,
    title: "All Categories",
    value: "43",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
