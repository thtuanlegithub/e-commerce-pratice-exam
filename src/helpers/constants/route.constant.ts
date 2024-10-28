export enum ROUTE_NAME {
  AUTH = "auth",
  ADMIN = "admin",
  MAIN = "main",
  USER = "user",
}

export const APP_ROUTE = {
  ADMIN: {
    DASHBOARD: `/${ROUTE_NAME.ADMIN}/dashboard`,
    PRODUCT: {
      _: `/${ROUTE_NAME.ADMIN}/product`,
      DETAIL: `/${ROUTE_NAME.ADMIN}/product/detail`,
    },
    CUSTOMER: `/${ROUTE_NAME.ADMIN}/customer`,
    ORDER: `/${ROUTE_NAME.ADMIN}/order`,
  },
  AUTH: {
    LOGIN: `/${ROUTE_NAME.AUTH}/login`,
    REGISTER: `/${ROUTE_NAME.AUTH}/register`,
  },
  USER: {
    HOME: `/${ROUTE_NAME.USER}/home`,
    PRODUCT: `/${ROUTE_NAME.USER}/product`,
  },
};
