import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex h-dvh flex-col">
      <Navbar />
      <div className="flex h-full overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
