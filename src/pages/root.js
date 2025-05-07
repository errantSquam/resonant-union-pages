import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

//OPTIMIZATION TODO: 
// 1. SELF HOST GOOGLE FONTS
// 2. VECTORIZE RU LOGO IN THE BACK

function Root() {
    return (
      <div className="bg-gradient-to-bl from-blue-600 from-0% to-slate-950 to-50% min-h-screen min-w-full pb-32">
        <Navbar />
        <Outlet />
      </div>
    );
  }

export default Root