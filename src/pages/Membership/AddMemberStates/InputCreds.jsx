import React from "react";

const status = ["Monthly", "Quarterly", "Annual"];
const memberTypes = ["Student", "Regular", "VIP"];
const waterMonthly = ["YES", "NO"];

export default function InputCreds() {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-8 overflow-y-auto p-4">
      <h2 className="text-center text-base font-semibold sm:text-lg lg:text-xl xl:text-2xl">
        INPUT MEMBER NEW CREDENTIALS
      </h2>

      <div className="flex w-full max-w-xl flex-col gap-3">
        <InputField label="Name:" />
        <DropdownField label="Member Type:" options={memberTypes} />
        <DropdownField label="Status:" options={status} />
        <InputField label="Contact:" />
        <InputField label="Email Address:" />
        <DropdownField label="Water (Monthly):" options={waterMonthly} />

        {/* Save Button */}
        <button className="w-full cursor-pointer rounded-md bg-black/80 py-2 text-sm font-semibold text-yellow-600 transition hover:bg-black/90 sm:text-base lg:text-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
}

/* 🔸 Text Input Field */
function InputField({ label }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white p-2 shadow-sm">
      <label className="text-xs font-semibold sm:text-[12px] lg:text-lg">
        {label}
      </label>
      <input
        type="text"
        className="flex-1 text-xs font-semibold text-yellow-600 outline-none sm:text-[12px] lg:text-lg"
        placeholder="Enter value..."
      />
    </div>
  );
}

/* 🔸 Dropdown Field */
function DropdownField({ label, options }) {
  return (
    <div className="flex flex-col gap-1 rounded-md bg-white p-2 shadow-sm">
      <label className="text-xs font-semibold sm:text-[12px] lg:text-lg">
        {label}
      </label>
      <select className="cursor-pointer rounded-md border border-neutral-600 p-1 text-xs text-gray-800 outline-0 sm:text-sm md:text-base lg:text-lg">
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
