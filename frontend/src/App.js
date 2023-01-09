import Home from "./pages/Home/Home";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getLoginStatus } from "./services/authService";
// import { SET_LOGIN } from "./redux/features/auth/authSlice";

axios.defaults.withCredentials = true;
function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   async function loginStatus() {
  //     const status = await getLoginStatus();
  //     console.log("status", status);
  //     dispatch(SET_LOGIN(status));
  //   }
  //   loginStatus();
  // }, [dispatch]);

  return <Home />;
}

export default App;
