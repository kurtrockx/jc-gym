import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function MainContentLayout({
  pageTitle,
  children,
  rerender = false,
  buttonShow = true,
}) {
  const navigate = useNavigate();
  const pageTitleResponsive =
    "2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg";
  const gapResponsive = "gap-2";

  return (
    <div className={`flex h-full flex-1 flex-col p-10 ${gapResponsive}`}>
      <p
        className={`font-bold text-black/60 capitalize ${pageTitleResponsive}`}
      >
        {pageTitle}
      </p>
      {buttonShow && (
        <Button
          onClick={() => (rerender === true ? navigate(0) : navigate(-1))}
        >
          Go Back
        </Button>
      )}
      <div className="flex-1 overflow-y-auto bg-black/20">{children}</div>
    </div>
  );
}
