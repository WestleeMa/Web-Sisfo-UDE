import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard";
import FormOption from "../pages/FormOption";
import InfoDetail from "../pages/InfoDetail";
import Login from "../layouts/Login";
import Status from "../pages/Status";
import Manage from "../pages/adminManage";
import ChangePass from "../pages/ChangePassword";

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
      {
        path: "deets",
        element: <InfoDetail />,
      },
      {
        path: "adminmng",
        element: <Manage />,
      },
      {
        path: "changepass",
        element: <ChangePass />,
      },
    ],
  },
]);

export default router;
