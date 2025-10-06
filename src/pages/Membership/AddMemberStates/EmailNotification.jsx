import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import emailIcon from "../../../assets/emailIcon.svg";

export default function EmailNotification() {
  return (
    <div className="flex max-w-120 flex-col items-center justify-center gap-8">
      <img src={emailIcon} alt="camera" className="max-w-60" />
      <div className="flex max-w-[80%] flex-col items-center gap-2 text-center text-xl font-semibold">
        <p>Hi (Name)! Email Confirmation has been sent to you.</p>
        <p>For your J Cruz Gym GoodHealth Subscription for (Timeframe).</p>
      </div>
      <Link to="/membership">
        <Button>CLOSE</Button>
      </Link>
    </div>
  );
}
