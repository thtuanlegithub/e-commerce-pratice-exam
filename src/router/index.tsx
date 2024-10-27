import { createBrowserRouter, Navigate } from "react-router-dom";
import { APP_ROUTE, ROUTE_NAME } from "../helpers/constants/route.constant";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "../layouts/PrivateRoute";
import PublicRoute from "../layouts/PublicRoute";
import LoginPage from "../pages/AuthPage/LoginPage";
import DashboardPage from "../pages/MainPage/DashboardPage";

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: ROUTE_NAME.AUTH,
        children: [
          {
            path: APP_ROUTE.AUTH.LOGIN,
            element: <LoginPage />,
          },
          {
            path: APP_ROUTE.AUTH.REGISTER,
            element: <div>Register</div>,
          },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={APP_ROUTE.MAIN.DASHBOARD} replace />,
          },
          {
            path: APP_ROUTE.MAIN.DASHBOARD,
            element: <DashboardPage />,
          },
          {
            path: APP_ROUTE.MAIN.PRODUCT,
            element: <div>Product</div>,
          },
          {
            path: APP_ROUTE.MAIN.CUSTOMER,
            element: <div>Customer</div>,
          },
          {
            path: APP_ROUTE.MAIN.ORDER,
            element: <div>Order</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
