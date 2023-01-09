import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center">
        <div>Welcome</div>
        <div>User</div>
      </div>
      <div>
        <Button variant="gradient" onClick={logout} fullWidth>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
