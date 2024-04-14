import { Outlet } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

export default function MainLayouts() {
  return (
    <>
      <div className="bg-white">
        <Navbar2 />
        <div className="container mx-auto mt-3 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
