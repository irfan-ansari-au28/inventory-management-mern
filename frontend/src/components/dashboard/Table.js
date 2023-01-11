import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import { GrView, GrEdit, GrTrash } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Spinner } from "../../loader/Loader";

export function Tables({ products, isLoading }) {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Products
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          {isLoading && <Spinner />}
          {!isLoading && products.length === 0 ? (
            <div class="px-4 py-3 text-xs border text-center">
              <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                {" "}
                Product not found, Please add..
              </span>
            </div>
          ) : (
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "Serial",
                    "Image",
                    "Category",
                    "Price",
                    "Quantity",
                    "Value",
                    "Action",
                  ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((product, key) => {
                  const { image, name, sku, price, category, quantity, _id } =
                    product;
                  // {
                  //     "_id": "63bd949d041cb8de943b2dae",
                  //     "user": "63bd51d17d4d994072f1fa10",
                  //     "name": "dsfds",
                  //     "sku": "DSF-1673368730993",
                  //     "category": "dsf",
                  //     "quantity": "12",
                  //     "price": "124",
                  //     "description": "sdfsafsa",
                  //     "image": {
                  //         "fileName": "WhatsApp Image 2022-12-20 at 16.21.25.jpeg",
                  //         "filePath": "https://res.cloudinary.com/dhckuejtf/image/upload/v1673368732/Inventory%20app/xr68gj4mkuw5ofmc3ezb.jpg",
                  //         "fileType": "image/jpeg",
                  //         "fileSize": "208.3 KB"
                  //     },
                  //     "createdAt": "2023-01-10T16:38:53.277Z",
                  //     "updatedAt": "2023-01-10T16:38:53.277Z",
                  //     "__v": 0
                  // }
                  const className = `py-3 px-5 ${
                    key === products.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  } `;

                  return (
                    <tr key={_id}>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {key + 1}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4 text-xs ">
                          <Avatar
                            src={image?.filePath}
                            alt={_id.slice(_id.length - 5, _id.length)}
                            size="sm"
                          />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {_id}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {category}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          ${price}.00
                        </Typography>
                        {/* <Typography className="text-xs font-normal text-blue-gray-500">
                        {job}
                      </Typography> */}
                      </td>

                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {quantity ? quantity : 10}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={price ? "green" : "blue-gray"}
                          value={`$${price}.00`}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        />
                      </td>
                      <td className={className}>
                        <div className="flex justify-between items-center ">
                          <Link className="ml-1">
                            <GrView color="blue" />
                          </Link>
                          <Link className="ml-1">
                            <GrEdit color="green" />
                          </Link>
                          <Link className="ml-1">
                            <GrTrash color="red" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
