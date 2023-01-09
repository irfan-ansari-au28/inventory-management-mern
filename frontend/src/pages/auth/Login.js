import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../loader/Loader";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className="min-h-screen w-full">
        <div className=" flex items-center justify-center h-screen  ">
          <div className="container mx-auto p-4">
            <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
              <form onSubmit={login}>
                <CardHeader
                  variant="gradient"
                  color="blue"
                  className="mb-4 grid h-28 place-items-center"
                >
                  <Typography variant="h3" color="white">
                    Sign In
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    label="Email"
                    size="lg"
                  />
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    label="Password"
                    size="lg"
                  />
                  {/* <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                  </div> */}
                  <Link to="/forgot">
                    <Typography
                      as="span"
                      variant="small"
                      color="blue"
                      className="ml-1 underline"
                    >
                      Forgot Password
                    </Typography>
                  </Link>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button type="submit" variant="gradient" fullWidth>
                    Sign In
                  </Button>
                  <Typography
                    variant="small"
                    className="mt-6 flex justify-center"
                  >
                    Don't have an account?
                    <Link to="/register">
                      <Typography
                        as="span"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                      >
                        Sign up
                      </Typography>
                    </Link>
                  </Typography>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
