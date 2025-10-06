import React from "react";
import cameraTemp from "../../../assets/cameraTemp.png";
import { Link } from "react-router-dom";

export default function Facecam() {
  return (
    <div className="flex max-w-120 flex-col items-center justify-center gap-8">
      <h2 className="text-center text-4xl font-semibold">Look at the Webcam</h2>
      <img src={cameraTemp} alt="camera" className="max-w-80" />
      <Link to="">
        <button className="rounded-2xl bg-black px-16 py-4 text-2xl font-semibold text-yellow-600">
          SUBMIT
        </button>
      </Link>
    </div>
  );
}
