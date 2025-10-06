export default function Button({ onClick, children }) {
  return (
    <button
      onClick={() => onClick()}
      className="hover:bg-black/80 max-w-fit cursor-pointer self-end rounded-2xl bg-black px-16 py-4 font-semibold text-yellow-600"
    >
      {children}
    </button>
  );
}
