import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";
import dashboardIcon from "../assets/dashboardIcon.svg";
import logSessionIcon from "../assets/logSessionIcon.svg";
import membershipIcon from "../assets/membershipIcon.svg";
import dailyLogIcon from "../assets/dailyLogIcon.svg";
import inventoryIcon from "../assets/inventoryIcon.svg";
import revenueIcon from "../assets/revenueIcon.svg";
import requestIcon from "../assets/requestIcon.svg";
import Button from "./Button.jsx";

const pages = [
  { name: "Dashboard", icon: dashboardIcon },
  { name: "Log Session", icon: logSessionIcon },
  { name: "Membership", icon: membershipIcon },
  { name: "Daily Log", icon: dailyLogIcon },
  { name: "Inventory", icon: inventoryIcon },
  { name: "Revenue", icon: revenueIcon },
  { name: "Request", icon: requestIcon },
];

export default function Sidebar() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const textResponsive = "xl:text-base md:text-sm text-xs";
  const logoResponsive = "2xl:h-10 lg:h-8 h-6";

  const handleLogout = () => {
    setLoggedIn(null);
    localStorage.removeItem("loggedIn");
    window.location.href = "/login"; // simple hard redirect
  };

  return (
    <div className="sidebar z-20 flex max-w-[12em] flex-1 flex-col justify-between bg-black/10 px-2 py-4 shadow-[0_0_.25rem] shadow-black/40 lg:max-w-[14em] 2xl:max-w-[16em]">
      {/* Navigation Links */}
      <div className="flex flex-col items-center gap-6 lg:gap-4">
        {pages.map((p) => (
          <NavLink
            key={p.name}
            className="group relative flex w-full items-center justify-center rounded-xl px-2 py-1 hover:bg-white/20 lg:px-px lg:py-2.5"
            to={p.name.toLowerCase()}
          >
            <img
              src={p.icon}
              alt={p.name}
              className={`aspect-square flex-1 cursor-pointer duration-150 group-hover:-translate-y-0.5 ${logoResponsive}`}
            />
            <p className={`flex-2 px-px font-semibold ${textResponsive}`}>
              {p.name}
            </p>
          </NavLink>
        ))}
      </div>

      {/* Footer: User + Logout */}
      <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/20 pt-4 text-center">
        <p className="text-sm font-medium">
          Logged in as:{" "}
          <span className="font-semibold text-[#f9a826]">
            {loggedIn || "Guest"}
          </span>
        </p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
