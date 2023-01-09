import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { forgotPassword, validateEmail } from "../../services/authService";
import BackgroundImage from "../../components/common/BackgroundImage";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail("");
  };
  return (
    <div className="container mx-auto p-4">
      <BackgroundImage
        src={
          "https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        }
        alt={"night-sky"}
      />
      <form onSubmit={forgot}>
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
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" type="submit" fullWidth>
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
      </form>
    </div>
  );
};

export default Forgot;
