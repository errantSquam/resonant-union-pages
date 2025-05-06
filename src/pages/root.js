import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function Root() {
    return (
      <div className="bg-slate-950 min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    );
  }

export default Root