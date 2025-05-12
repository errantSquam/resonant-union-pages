import { Routes, Route, Outlet, Link } from "react-router-dom";
import Root from "./pages/root";
import Members from "./pages/members";
import Albums from "./pages/albums";
import Home from "./pages/home";
import Contact from "./pages/contact";

export default function App() {
  return (
      <Routes>
        <Route path="/resonant-union-pages" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="members" element={<Members />} />
          <Route path="contact" element = {<Contact/>}/>
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
  );
}