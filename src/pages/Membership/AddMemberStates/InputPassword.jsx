import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import cautionIcon from "../../../assets/cautionIcon.png";

export default function InputPassword() {
  const [password, setPassword] = useState(Array(6).fill(""));

  const handleInputChange = (value, index) => {
    const newPassword = [...password];
    newPassword[index] = value;
    setPassword(newPassword);

    // Automatically focus the next input
    const nextInput = document.querySelector(
      `input[data-index="${index + 1}"]`,
    );
    if (value && nextInput) {
      nextInput.focus();
    }
  };

  const clearFields = () => {
    setPassword(Array(6).fill(""));
    const firstInput = document.querySelector(`input[data-index="0"]`);
    if (firstInput) {
      firstInput.focus();
    }
  };

  return (
    <div className="flex max-w-200 flex-col items-center justify-center gap-4">
      <h2 className="text-center text-4xl font-semibold">INPUT PASSWORD</h2>
      <img src={cautionIcon} alt="camera" className="max-w-80" />
      <div className="flex items-center gap-2 rounded-xl bg-neutral-500 px-4 py-2 text-white">
        <>
          <label>Enter Password:</label>
          {password.map((char, index) => (
            <input
              key={index}
              data-index={index}
              type="password"
              maxLength={1}
              value={char}
              className="h-12 w-12 rounded-md bg-neutral-400 text-center text-xl outline-none"
              onChange={(e) => handleInputChange(e.target.value, index)}
            />
          ))}
        </>
      </div>
      <div className="flex gap-4">
        <Link to="">
          <Button>SUBMIT</Button>
        </Link>
        <Button onClick={clearFields}>CLEAR</Button>
      </div>
    </div>
  );
}
