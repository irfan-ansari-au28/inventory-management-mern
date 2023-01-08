import React, { useState } from "react";
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

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target, "--");
    setFormData({ ...formData, [name]: value });
  };
  const register = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <div className="container mx-auto p-4">
      <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
        <form onSubmit={register}>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="mb-2">
              <Input
                label="Name"
                name="name"
                value={name}
                size="lg"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <Input
                type="email"
                name="email"
                value={email}
                label="Email"
                size="lg"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <Input
                type="password"
                name="password"
                value={password}
                label="Password"
                size="lg"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <Input
                type="password"
                name="password2"
                value={password2}
                label="Confirm Password"
                size="lg"
                onChange={handleInputChange}
              />
            </div>
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Sign Up
            </Button>

            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/login">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Register;
