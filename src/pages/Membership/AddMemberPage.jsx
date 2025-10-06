import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import { useState } from "react";
import Loader from "../../components/Loader";
import Facecam from "./AddMemberStates/Facecam";

export default function AddMemberPage() {
  const { pageTitle } = useOutletContext();

  //loading, facecam, studentId, inputCreds, confirm, emailNotif
  const [memberState, setMemberState] = useState("facecam");

  return (
    <MainContentLayout pageTitle={pageTitle + " > Add Member"}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <h2 className="text-sm font-semibold lg:text-lg xl:text-2xl"></h2>
        {memberState === "loading" && <Loader />}
        {memberState === "facecam" && <Facecam />}
        {/* {memberState === "studentId" && <StudentId />}
        {memberState === "inputCreds" && <InputCreds />}
        {memberState === "confirm" && <Confirm />}
        {memberState === "emailNotif" && <EmailNotif />}  */}
      </div>
    </MainContentLayout>
  );
}
