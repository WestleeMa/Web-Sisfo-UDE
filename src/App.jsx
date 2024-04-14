import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
// import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./router";
AOS.init();

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
