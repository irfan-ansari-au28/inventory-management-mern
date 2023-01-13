import React, { useEffect, useState } from "react";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getProducts } from "../../redux/features/product/productSlice";
import Table from "./Table";
import Search from "../Search/Search";
import {
  FILTER_PRODUCTS,
  selectFilteredPoducts,
} from "../../redux/features/product/filterSlice";

import ProductSummary from "../product/ProductSummary";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );
  const filteredProducts = useSelector(selectFilteredPoducts);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProducts());
    }
    if (isError) {
      console.log("Error : ", message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  // filtered product
  useEffect(() => {
    setTimeout(() => {
      dispatch(FILTER_PRODUCTS({ products, search }));
    }, [100]);
  }, [products, search, dispatch]);

  return (
    <>
      <div>Dashboard</div>
      <ProductSummary products={products} />
      <Search search={search} onChange={(e) => setSearch(e.target.value)} />
      <Table filteredProducts={filteredProducts} isLoading={isLoading} />
    </>
  );
};

export default Dashboard;
