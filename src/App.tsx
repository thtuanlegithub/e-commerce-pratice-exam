import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { login } from "./services/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(
    login({
      id: 1,
      email: "admin@email.com",
    })
  );
  return <RouterProvider router={router} />;
}

export default App;
