import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard";
import FormOption from "../pages/FormOption";

const router = createBrowserRouter([
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
    ],
  },
]);

export default router;
