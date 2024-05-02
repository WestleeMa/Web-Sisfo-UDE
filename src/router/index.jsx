import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard";
import FormOption from "../pages/FormOption";
import Login from "../layouts/Login";
import Status from "../pages/Status";

const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "fill-form",
        element: <FormOption />,
      },
      {
        path: "status",
        element: <Status />,
      },
    ],
  },
]);

export default router;
