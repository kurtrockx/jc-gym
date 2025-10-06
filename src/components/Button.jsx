export default function Button({ onClick, children }) {
  const textResponsive =
    "2xl:text-sm max-2xl:text-[10px] max-lg:text-[6px] max-md:text-[4px]";

  return (
    <button
      onClick={() => onClick()}
      className={`max-w-fit cursor-pointer self-end rounded-2xl bg-black px-16 py-4 font-semibold text-yellow-600 hover:bg-black/80 ${textResponsive}`}
    >
      {children}
    </button>
  );
}
