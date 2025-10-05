import React from "react";
import loadingIcon from "../assets/loadingIcon.png";
import cautionIcon from "../assets/cautionIcon.png";
export default function Loader() {
  return (
    <div className="flex max-w-120 flex-col items-center justify-center gap-4">
      <img src={cautionIcon} alt="Loading..." />
      <h2 className="text-center text-4xl font-semibold">
        Place the RFID Card on RFID Card Reader
      </h2>
      <img src={loadingIcon} alt="Loading..." className="animate-spin" />
    </div>
  );
}
