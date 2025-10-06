import cameraTemp from "../../../assets/cameraTemp.png";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function StudentID() {
  return (
    <div className="flex max-w-120 flex-col items-center justify-center gap-8">
      <h2 className="text-center text-4xl font-semibold">PROVIDE STUDENT ID</h2>
      <img src={cameraTemp} alt="camera" className="max-w-80" />
      <Link to="">
        <Button>SUBMIT</Button>
      </Link>
    </div>
  );
}
