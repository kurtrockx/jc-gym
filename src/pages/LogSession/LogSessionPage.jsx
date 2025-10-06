import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import { useState } from "react";
import Loader from "../../components/Loader";
import InputLoginCreds from "./LogSessionStates/InputLoginCreds";

export default function LogSession({ rerender }) {
  const { pageTitle } = useOutletContext();
  //choices, loading, inputLoginCreds
  const [memberState, setMemberState] = useState("choices");
  console.log(memberState);

  return (
    <MainContentLayout pageTitle={pageTitle} rerender={true}>
      {memberState === "choices" && <Choices setMemberState={setMemberState} />}
      <div className="flex h-full flex-1 items-center justify-center">
        {memberState === "loading" && <Loader />}
        {memberState === "inputLoginCreds" && <InputLoginCreds />}
      </div>
    </MainContentLayout>
  );
}

function Choices({ setMemberState }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <h2 className="text-sm font-semibold lg:text-lg xl:text-2xl">
        CONSUMER LOG THROUGH RFID?
      </h2>
      <div className="flex gap-8 lg:gap-12 xl:gap-20">
        <Button onClick={() => setMemberState("loading")}>YES</Button>
        <Button onClick={() => setMemberState("inputLoginCreds")}>NO</Button>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  const padding = `px-8 py-2 sm:px-12 sm:py-3 md:px-16 md:py-4 lg:px-20 lg:py-5 xl:px-24 xl:py-6 2xl:px-36 2xl:py-8`;
  const text = "text-sm sm:text-base md:text-lg lg:xl xl:text-2xl 2xl:text-3xl";

  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-black font-bold text-yellow-600 ${padding} ${text} cursor-pointer`}
    >
      {children}
    </button>
  );
}
