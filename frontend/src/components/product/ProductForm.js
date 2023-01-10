import React from "react";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="flex flex-col mx-[20%]">
      <form onSubmit={saveProduct} encType="multipart/form-data">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="font-semibold text-lg mr-auto">Add New product</h2>
          <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
        </div>
        <div className="mt-5">
          <div className="form">
            <div className="md:space-y-2 mb-3">
              <label className="text-xs font-semibold text-gray-600 py-2">
                Product Image
                <abbr className="hidden" title="required">
                  *
                </abbr>
              </label>
              <div className="flex items-center py-6">
                {imagePreview !== null ? (
                  <div className="w-80 h-60 mr-4 flex-none rounded-xl border overflow-hidden">
                    <img
                      className="w-80 h-60 mr-4 object-cover"
                      src={productImage}
                      alt="Avatar Upload"
                    />
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 text-left my-3 mr-3">
                    No image set for this product
                  </p>
                )}
                <label className="cursor-pointer ">
                  <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                    Browse
                  </span>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => handleImageChange(e)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex flex-row md:space-x-4 w-full text-xs">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-600 py-2">
                  Product Name <abbr title="required">*</abbr>
                </label>
                <input
                  placeholder="Product Name"
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                  required="required"
                  type="text"
                  name="name"
                  value={product?.name}
                  onChange={handleInputChange}
                />
                <p className="text-red text-xs hidden">
                  Please fill out this field.
                </p>
              </div>
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-600 py-2">
                  Product Category <abbr title="required">*</abbr>
                </label>
                <input
                  placeholder="Electronics"
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                  required="required"
                  type="text"
                  name="category"
                  value={product?.category}
                  onChange={handleInputChange}
                />
                <p className="text-red text-xs hidden">
                  Please fill out this field.
                </p>
              </div>
            </div>

            <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
              <div className="w-full flex flex-col mb-3">
                <label className="font-semibold text-gray-600 py-2">
                  Product Price
                </label>
                <input
                  placeholder="$ 274.76"
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                  type="text"
                  name="price"
                  value={product?.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full flex flex-col mb-3">
                <label className="font-semibold text-gray-600 py-2">
                  Product Quantity
                </label>
                <input
                  placeholder="100"
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                  type="text"
                  name="quantity"
                  value={product?.quantity}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex-auto w-full mb-1 text-xs space-y-2">
              <label className="font-semibold text-gray-600 py-2">
                Description
              </label>
              <textarea
                required=""
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                placeholder="Enter product description"
              />
              <p className="text-xs text-gray-400 text-left my-3">
                You inserted 0 characters
              </p>
            </div>
            <p className="text-xs text-red-500 text-right my-3">
              Required fields are marked with an asterisk{" "}
              <abbr title="Required field">*</abbr>
            </p>
            <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
              <button
                type="submit"
                className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
