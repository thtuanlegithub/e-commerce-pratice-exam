import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { APP_ROUTE } from "../helpers/constants/route.constant";
import { USER_TYPE } from "../helpers/types/dto/user.type";
import { AuthState } from "../services/slices/authSlice";
import { RootState } from "../services/store";

function PublicRoute() {
  const { isAuthenticated, user }: AuthState = useSelector(
    (state: RootState) => state.auth
  );

  return isAuthenticated ? (
    <Navigate
      to={
        user?.userType === USER_TYPE.ADMIN
          ? APP_ROUTE.ADMIN.DASHBOARD
          : APP_ROUTE.USER.HOME
      }
    />
  ) : (
    <Outlet />
  );
}

export default PublicRoute;
