import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SET_LOGIN } from "../redux/features/auth/authSlice";

const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const redirectLoggedOutUser = async () => {
      const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
      dispatch(SET_LOGIN(isLoggedIn));
      if (!isLoggedIn) {
        toast.info("Session expired, please login again to continue.");
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, path]);

  return <div>useRedirectLoggedOutUser</div>;
};

export default useRedirectLoggedOutUser;
