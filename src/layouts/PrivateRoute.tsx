import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { APP_ROUTE } from "../helpers/constants/route.constant";
import { AuthState } from "../services/slices/authSlice";
import { RootState } from "../services/store";

function PrivateRoute() {
  const { isAuthenticated }: AuthState = useSelector(
    (state: RootState) => state.auth
  );
  return isAuthenticated ? <Outlet /> : <Navigate to={APP_ROUTE.AUTH.LOGIN} />;
}

export default PrivateRoute;
