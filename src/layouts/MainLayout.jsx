import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbaruser";
import { ToastContainer } from "react-toastify";
import { Cookies } from "react-cookie";
import { useEffect, useState } from "react";

export default function MainLayouts() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (cookie.get("userData")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }
  }, []);

  if (!isAuthenticated) {
    return null;
  } else {
    return (
      <>
        <ToastContainer />
        <div className="bg-white">
          <Navbar2 />
          <div className="container mx-auto my-10 ">
            <Outlet />
          </div>
        </div>
      </>
    );
  }
}
