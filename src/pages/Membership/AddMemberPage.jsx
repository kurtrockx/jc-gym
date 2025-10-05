import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import { useState } from "react";
import Loader from "../../components/Loader";

export default function AddMemberPage() {
  const { pageTitle } = useOutletContext();

  //loading, facecam, studentId, inputCreds, confirm, emailNotif
  const [memberState, setMemberState] = useState("loading");

  return (
    <MainContentLayout pageTitle={pageTitle + " > Add Member"}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <h2 className="text-sm font-semibold lg:text-lg xl:text-2xl"></h2>
        <div className="">{memberState === "loading" && <Loader />}</div>
      </div>
    </MainContentLayout>
  );
}
