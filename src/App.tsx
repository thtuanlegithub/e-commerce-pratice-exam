import "antd/dist/reset.css";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { USER_TYPE } from "./helpers/types/dto/user.type";
import router from "./router";
import { login } from "./services/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(
    login({
      id: 1,
      email: "admin@email.com",
      userType: USER_TYPE.USER,
    })
  );
  return <RouterProvider router={router} />;
}

export default App;
