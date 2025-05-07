import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function Root() {
    return (
      <div className="bg-gradient-to-bl from-blue-600 from-0% to-slate-950 to-50% min-h-screen min-w-full pb-32">
        <Navbar />
        <Outlet />
      </div>
    );
  }

export default Root