import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import { useState } from "react";
import Loader from "../../components/Loader";
import Facecam from "./AddMemberStates/Facecam";
import StudentID from "./AddMemberStates/StudentID";
import InputCreds from "./AddMemberStates/InputCreds";
import InputPassword from "./AddMemberStates/InputPassword";
import EmailNotification from "./AddMemberStates/EmailNotification";

export default function AddMemberPage() {
  const { pageTitle } = useOutletContext();

  //loading, facecam, studentID, inputCreds, inputPassword, emailNotif
  const [memberState, setMemberState] = useState("loading");

  return (
    <MainContentLayout pageTitle={pageTitle + " > Add Member"}>
      <div className="flex min-h-full w-full flex-col items-center justify-center gap-10 py-4">
        {memberState === "loading" && <Loader />}
        {memberState === "facecam" && <Facecam />}
        {memberState === "studentID" && <StudentID />}
        {memberState === "inputCreds" && <InputCreds />}
        {memberState === "inputPassword" && <InputPassword />}
        {memberState === "emailNotif" && <EmailNotification />}
      </div>
    </MainContentLayout>
  );
}
