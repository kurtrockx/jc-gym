import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function InputLoginCreds() {
  return (
    <div className="flex max-w-120 flex-col items-center justify-center gap-8">
      <h2 className="text-center text-4xl font-semibold">
        Enter your credentials:
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex w-full gap-2 rounded-xl bg-neutral-400 px-4 py-2 text-xl text-white">
          <label className="font-semibold">Name:</label>
          <input type="text" className="flex-1 outline-0" />
        </div>
        <div className="flex w-full gap-2 rounded-xl bg-neutral-400 px-4 py-2 text-xl text-white">
          <label className="font-semibold">Password:</label>
          <input type="password" className="flex-1 outline-0" />
        </div>
      </div>
      <Link to="">
        <Button>SUBMIT</Button>
      </Link>
    </div>
  );
}
