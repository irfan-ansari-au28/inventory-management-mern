import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/authService";
import BackgroundImage from "../../components/common/BackgroundImage";

const initialState = {
  password: "",
  password2: "",
};

const Reset = () => {
  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;
  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const resetHandler = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
      password2,
    };

    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <BackgroundImage
        src={
          "https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        }
        alt={"night-sky"}
      />
      <form onSubmit={resetHandler}>
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Reset Password
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="password"
              label="New Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              size="lg"
            />
            <Input
              type="password"
              label="Confirm New Password"
              name="password2"
              value={password2}
              onChange={handleInputChange}
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" type="submit" fullWidth>
              Reset Password
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
      </form>
    </div>
  );
};

export default Reset;
