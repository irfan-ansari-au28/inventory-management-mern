import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./layouts/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./pages/addProduct/addProduct";
import ProductDetail from "./components/product/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/resetpassword/:resetToken",
    element: <Reset />,
  },
  {
    path: "/dashboard",
    element: (
      <Sidebar>
        <Layout>
          <Dashboard></Dashboard>
        </Layout>
      </Sidebar>
    ),
  },
  {
    path: "/add-product",
    element: (
      <Sidebar>
        <Layout>
          <AddProduct />
        </Layout>
      </Sidebar>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Sidebar>
        <Layout>
          <ProductDetail />
        </Layout>
      </Sidebar>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
