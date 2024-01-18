import { Outlet } from "react-router-dom";
import Sidemenu from "../components/Sidemenu/Sidemenu";

export default function Root() {
  return (
    <div className="page-container">
      <Sidemenu />
      <Outlet />
    </div>
  );
}
