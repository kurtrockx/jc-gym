import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function InputLoginCreds() {
  const [name, setName] = useState("");
  const [consumerType, setConsumerType] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check password validity
    if (password === "123456" || password === "234567") {
      alert("Member successfully added");
      // You can redirect or do further logic here
    } else {
      alert("❌ Incorrect password. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-120 flex-col items-center justify-center gap-8"
    >
      <h2 className="text-center text-4xl font-semibold">
        Enter your credentials:
      </h2>

      <div className="flex flex-col gap-4">
        {/* Name Input */}
        <div className="flex w-full gap-2 rounded-xl bg-neutral-400 px-4 py-2 text-xl text-white">
          <label className="font-semibold">Name:</label>
          <input
            type="text"
            className="flex-1 outline-0 text-neutral-900 px-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Type of Consumer Dropdown */}
        <div className="flex w-full gap-2 rounded-xl bg-neutral-400 px-4 py-2 text-xl text-white">
          <label className="font-semibold" htmlFor="consumerType">
            Type of Consumer:
          </label>
          <select
            id="consumerType"
            className="flex-1 rounded-lg bg-white text-neutral-700 px-2 py-1 outline-none"
            value={consumerType}
            onChange={(e) => setConsumerType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Student">Student</option>
            <option value="Regular">Regular</option>
          </select>
        </div>

        {/* Password Input */}
        <div className="flex w-full gap-2 rounded-xl bg-neutral-400 px-4 py-2 text-xl text-white">
          <label className="font-semibold">Password:</label>
          <input
            type="password"
            className="flex-1 outline-0 text-neutral-900 px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit">SUBMIT</Button>
    </form>
  );
}
