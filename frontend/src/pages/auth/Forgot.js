import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Forgot = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Forgot Password
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input type="email" label="Email" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Get reset email
          </Button>
          <Typography
            variant="small"
            className="mt-6 flex justify-between items-center"
          >
            <Link to="/login">
              <Typography
                as="span"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
              >
                Login
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                as="span"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
              >
                Home
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Forgot;
