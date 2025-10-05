import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const locationPath = location.pathname.split("/")[1].split("%20");
  const pageTitle =
    locationPath.length > 1 ? locationPath.join(" ") : locationPath;

  return (
    <div className="flex h-dvh flex-col">
      <Navbar />
      <div className="flex h-full overflow-hidden">
        <Sidebar />
        <div className="z-10 flex-1 overflow-y-auto">
          <Outlet context={{ pageTitle }} />
        </div>
      </div>
    </div>
  );
}

export default App;
