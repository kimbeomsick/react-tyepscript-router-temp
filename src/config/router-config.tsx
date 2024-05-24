import Error from "../pages/Error";
import Main from "../pages/Main";
import Test from "../pages/Test";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
