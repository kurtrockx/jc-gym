import React from "react";

export default function MainContentLayout({ pageTitle, children }) {
  const pageTitleResponsive =
    "2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg";

  return (
    <div className="flex h-full flex-1 flex-col gap-10 p-10">
      <p
        className={`font-bold text-black/60 capitalize ${pageTitleResponsive}`}
      >
        {pageTitle}
      </p>
      <div className="flex-1 bg-black/20 overflow-y-scroll">{children}</div>
    </div>
  );
}
