export enum ROUTE_NAME {
  AUTH = "auth",
  MAIN = "main",
}

export const APP_ROUTE = {
  MAIN: {
    DASHBOARD: `/${ROUTE_NAME.MAIN}/dashboard`,
    PRODUCT: `/${ROUTE_NAME.MAIN}/product`,
    CUSTOMER: `/${ROUTE_NAME.MAIN}/customer`,
    ORDER: `/${ROUTE_NAME.MAIN}/order`,
  },
  AUTH: {
    LOGIN: `/${ROUTE_NAME.AUTH}/login`,
    REGISTER: `/${ROUTE_NAME.AUTH}/register`,
  },
};
