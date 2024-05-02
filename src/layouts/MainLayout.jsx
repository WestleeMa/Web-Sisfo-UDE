import { Outlet } from "react-router-dom";
import Navbar2 from "../components/Navbaruser";

export default function MainLayouts() {
  return (
    <>
      <div className="bg-white">
        <Navbar2 />
        <div className="container mx-auto my-10 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
