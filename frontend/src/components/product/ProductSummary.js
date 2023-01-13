import React, { useEffect } from "react";
import { statisticsCardsData } from "./statisticsCardsData";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_OUTOFSTOCK,
  CALC_STORE_VALUE,
  selectOutOfStock,
  selectTotalStoreValue,
} from "../../redux/features/product/productSlice";

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

  const x = 11;
  const y = 12;

  useEffect(() => {
    const values = [outOfStock, totalStoreValue, x, y];
    for (let i = 0; i++; i < statisticsCardsData.length) {
      statisticsCardsData[i].value = values[i];
      console.log("statisticsCardsData", statisticsCardsData);
    }
  }, [totalStoreValue, outOfStock]);

  useEffect(() => {
    dispatch(CALC_STORE_VALUE(products));
    dispatch(CALC_OUTOFSTOCK(products));
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
