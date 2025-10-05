import { useOutletContext } from "react-router-dom";

export default function LoadingPage() {
  const { pageTitle } = useOutletContext();

  return <div className="capitalize">{pageTitle}</div>;
}
