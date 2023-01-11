import React, { useEffect } from "react";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getProducts } from "../../redux/features/product/productSlice";
import Table from "./Table";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProducts());
    }
    if (isError) {
      console.log("Error : ", message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <>
      <div>Dashboard</div>
      <Table products={products} isLoading={isLoading} />
    </>
  );
};

export default Dashboard;
