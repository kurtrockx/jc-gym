import { useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import InputLoginCreds from "./LogSessionStates/InputLoginCreds";

export default function LogSession() {
  const { pageTitle } = useOutletContext();

  return (
    <MainContentLayout pageTitle={pageTitle} rerender={true}>
      <div className="flex h-full flex-1 items-center justify-center">
        <InputLoginCreds />
      </div>
    </MainContentLayout>
  );
}
