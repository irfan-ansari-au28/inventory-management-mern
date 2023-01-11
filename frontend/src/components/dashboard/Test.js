import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FILTER_PRODUCTS } from "../../redux/features/product/filterSlice";
import Search from "../Search/Search";

export const Test = ({ products }) => {
  const [search, setSearch] = useState("");
  console.log("se", search);
  const dispatch = useDispatch();

  // filtered product
  useEffect(() => {
    setTimeout(() => {
      dispatch(FILTER_PRODUCTS({ products, search }));
    }, [100]);
  }, [products, search, dispatch]);

  return <Search search={search} onChange={(e) => setSearch(e.target.value)} />;
};
