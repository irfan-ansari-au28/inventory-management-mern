import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { Spinner } from "../../loader/Loader";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getProduct } from "../../redux/features/product/productSlice";

const ProductDetail = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const { id } = useParams();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  const stockStatus = (quantity) => {
    if (quantity > 0) {
      return (
        <div
          className={`bg-green-600 ml-3 inline-block px-7 py-3  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`}
        >
          In Stock
        </div>
      );
    }
    return (
      <div
        className={`bg-red-600 ml-3 inline-block px-7 py-3  text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`}
      >
        Out Of Stock
      </div>
    );
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isError, message, dispatch]);
  return (
    <>
      {isLoading && <Spinner />}
      {product && (
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center md:text-left">
            <div className="block rounded-lg shadow-lg bg-white">
              <div className="flex flex-wrap items-center">
                <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                  <img
                    src={product.image.filePath}
                    alt={product.image.fileName}
                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="text-3xl font-bold mb-6 pb-2">
                      {product.name}
                    </h2>

                    <p className="text-gray-500 mb-6 pb-2">
                      {product.description}
                    </p>
                    <hr className="my-10" />
                    <div className="flex flex-wrap mb-6">
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <span class="px-2 py-1 text-sm text-gray-700 bg-green-100 rounded-full">
                            {" "}
                            SKU : {product.sku}
                          </span>
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <span class="px-2 py-1 text-sm text-gray-700 bg-yellow-100 rounded-full">
                            {" "}
                            Category : {product.category}
                          </span>
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <span class="px-2 py-1 text-sm text-gray-700 bg-blue-gray-100 rounded-full">
                            {" "}
                            Price : ${product.price}
                          </span>
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <span class="px-2 py-1 text-sm text-gray-700 bg-red-100 rounded-full">
                            {" "}
                            Quantity in stock : {product.quantity}
                          </span>
                        </p>
                      </div>
                      <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p className="flex items-center justify-center md:justify-start">
                          <span class="px-2 py-1 text-sm text-gray-700 bg-orange-100 rounded-full">
                            {" "}
                            Total Value in stock : $
                            {product.price * product.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-start ">
                      Product Availability:
                      {stockStatus(product.quantity)}
                    </div>
                    <hr className="my-10" />
                    <code className="mt-2 text-xs text-gray-700">
                      Created on: {product.createdAt.toLocaleString("en-US")}
                    </code>
                    <br />
                    <code className="mt-2 text-xs text-gray-700">
                      Last Updated: {product.updatedAt.toLocaleString("en-US")}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
