import { createBrowserRouter, Navigate } from "react-router-dom";
import { APP_ROUTE, ROUTE_NAME } from "../helpers/constants/route.constant";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "../layouts/PrivateRoute";
import PublicRoute from "../layouts/PublicRoute";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";
import CustomerPage from "../pages/MainPage/CustomerPage";
import DashboardPage from "../pages/MainPage/DashboardPage";
import OrderPage from "../pages/MainPage/OrderPage";
import ProductDetailPage from "../pages/MainPage/ProductDetailPage";
import ProductPage from "../pages/MainPage/ProductPage";

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
						element: <RegisterPage />,
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
						element: <Navigate to={APP_ROUTE.ADMIN.DASHBOARD} replace />,
					},
					{
						path: APP_ROUTE.ADMIN.DASHBOARD,
						element: <DashboardPage />,
					},
					{
						path: APP_ROUTE.ADMIN.PRODUCT._,
						children: [
							{
								path: APP_ROUTE.ADMIN.PRODUCT._,
								element: <ProductPage />,
							},
							{
								path: APP_ROUTE.ADMIN.PRODUCT.DETAIL,
								element: <ProductDetailPage />,
							},
						],
					},
					{
						path: APP_ROUTE.ADMIN.CUSTOMER,
						element: <CustomerPage />,
					},
					{
						path: APP_ROUTE.ADMIN.ORDER,
						element: <OrderPage />,
					},
				],
			},
		],
	},
]);

export default router;
