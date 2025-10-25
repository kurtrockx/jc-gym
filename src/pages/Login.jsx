import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import cautionIcon from "../assets/cautionIcon.png";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [password, setPassword] = useState(Array(6).fill(""));
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (value, index) => {
    const newPassword = [...password];
    newPassword[index] = value;
    setPassword(newPassword);

    // Move to next input automatically
    const nextInput = document.querySelector(
      `input[data-index="${index + 1}"]`,
    );
    if (value && nextInput) nextInput.focus();
  };

  const clearFields = () => {
    setPassword(Array(6).fill(""));
    const firstInput = document.querySelector(`input[data-index="0"]`);
    if (firstInput) firstInput.focus();
  };

  const handleSubmit = () => {
    const entered = password.join("");

    if (entered === "123456") {
      // ✅ Admin login
      setLoggedIn("admin");
      localStorage.setItem("loggedIn", "admin");
      navigate("/dashboard");
    } else if (entered === "234567") {
      // ✅ Server login
      setLoggedIn("server");
      localStorage.setItem("loggedIn", "server");
      navigate("/dashboard");
    } else {
      alert("Incorrect password. Try again.");
      clearFields();
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-center text-4xl font-semibold">INPUT PASSWORD</h2>
      <img src={cautionIcon} alt="camera" className="max-w-80" />
      <div className="flex items-center gap-2 rounded-xl bg-neutral-500 px-4 py-2 text-white">
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
      </div>
      <div className="flex gap-4">
        <Button onClick={handleSubmit}>SUBMIT</Button>
        <Button onClick={clearFields}>CLEAR</Button>
      </div>
    </div>
  );
}
