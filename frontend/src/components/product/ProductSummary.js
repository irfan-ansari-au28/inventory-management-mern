import React, { useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_CATEGORY,
  CALC_OUTOFSTOCK,
  CALC_STORE_VALUE,
  selectCategory,
  selectOutOfStock,
  selectTotalStoreValue,
} from "../../redux/features/product/productSlice";
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

export function StatisticsCard({ color, icon, title, value, footer }) {
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color={color}
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {value}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const outOfStock = useSelector(selectOutOfStock);
  const totalStoreValue = useSelector(selectTotalStoreValue);
  const category = useSelector(selectCategory);

  // const x = 11;
  // const y = 12;

  // useEffect(() => {
  //   const values = [outOfStock, totalStoreValue, x, y];
  //   for (let i = 0; i++; i < statisticsCardsData.length) {
  //     statisticsCardsData[i].value = values[i];
  //     console.log("statisticsCardsData", statisticsCardsData);
  //   }
  // }, [totalStoreValue, outOfStock]);

  const statisticsCardsData = [
    {
      color: "orange",
      icon: cartIcon,
      title: "Total Products",
      value: products.length,
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
      value: `$${totalStoreValue}`,
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
      value: outOfStock,
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
      value: category.length,
      footer: {
        color: "text-green-500",
        value: "+5%",
        label: "than yesterday",
      },
    },
  ];

  useEffect(() => {
    dispatch(CALC_STORE_VALUE(products));
    dispatch(CALC_OUTOFSTOCK(products));
    dispatch(CALC_CATEGORY(products));
  }, [dispatch, products]);

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, value, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            value={value}
            icon={icon}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSummary;
