import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";

export default function LogSession() {
  const { pageTitle } = useOutletContext();

  return (
    <MainContentLayout pageTitle={pageTitle}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <h2 className="text-sm font-semibold lg:text-lg xl:text-2xl">
          CONSUMER LOG THROUGH RFID?
        </h2>
        <div className="flex gap-8 lg:gap-12 xl:gap-20">
          <Link to="">
            <Button>YES</Button>
          </Link>
          <Link to="">
            <Button>NO</Button>
          </Link>
        </div>
      </div>
    </MainContentLayout>
  );
}

function Button({ children }) {
  const padding = `px-8 py-2 sm:px-12 sm:py-3 md:px-16 md:py-4 lg:px-20 lg:py-5 xl:px-24 xl:py-6 2xl:px-36 2xl:py-8`;
  const text = "text-sm sm:text-base md:text-lg lg:xl xl:text-2xl 2xl:text-3xl";

  return (
    <button
      className={`rounded-xl bg-black font-bold text-yellow-600 ${padding} ${text} cursor-pointer`}
    >
      {children}
    </button>
  );
}
