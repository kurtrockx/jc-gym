import { NavLink } from "react-router-dom";
import dashboardIcon from "../assets/dashboardIcon.svg";
import logSessionIcon from "../assets/logSessionIcon.svg";
import membershipIcon from "../assets/membershipIcon.svg";
import dailyLogIcon from "../assets/dailyLogIcon.svg";
import inventoryIcon from "../assets/inventoryIcon.svg";
import revenueIcon from "../assets/revenueIcon.svg";

const pages = [
  { name: "Dashboard", icon: dashboardIcon },
  { name: "Log Session", icon: logSessionIcon },
  { name: "Membership", icon: membershipIcon },
  { name: "Daily Log", icon: dailyLogIcon },
  { name: "Inventory", icon: inventoryIcon },
  { name: "Revenue", icon: revenueIcon },
];

export default function Sidebar() {
  const textResponsive = "text-xs xl:text-base md:text-sm";
  const logoResponsive = "lg:h-8 h-4";

  return (
    <div className="sidebar z-100 flex flex-1 flex-col items-center gap-6 bg-black/10 px-2 py-4 max-w-[12em] lg:max-w-[14em] lg:gap-4 2xl:max-w-[16em]">
      {pages.map((p) => (
        <NavLink
          key={p.name}
          className="group relative flex w-full items-center justify-center rounded-xl hover:bg-white/20 md:px-2 md:py-2.5 lg:px-px lg:py-4"
          to={p.name.toLowerCase()}
        >
          <img
            src={p.icon}
            alt={p.name}
            className={`aspect-square h-12 flex-1 cursor-pointer duration-150 group-hover:-translate-y-0.5 ${logoResponsive}`}
          />
          <p className={`flex-2 px-px font-semibold ${textResponsive}`}>
            {p.name}
          </p>
        </NavLink>
      ))}
    </div>
  );
}
