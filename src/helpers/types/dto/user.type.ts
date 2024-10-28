export enum USER_TYPE {
  USER = "user",
  ADMIN = "admin",
}

export type User = {
  id: number;
  email: string;
  userType: USER_TYPE;
};
