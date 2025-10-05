import { Link } from "react-router-dom";
import burgerIcon from "../assets/burgerIcon.svg";
import gymLogo from "../assets/gymLogo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md max-h-[10dvh] min-h-24 p-4">
      <div className="flex h-10 items-center gap-4">
        <img src={burgerIcon} alt="burgerIcon" className="max-h-full" />
        <p className="text-lg font-bold">J CRUZ GOODHEALTH GYM</p>
      </div>
      <img
        src={gymLogo}
        alt="prulife"
        className="max-h-full rounded-full object-contain p-1 shadow-[0_0_.25rem] shadow-black/40"
      />
    </nav>
  );
}
