import { useState } from "react";
import { useOutletContext, useParams, Link } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import { MEMBERS } from "../../sampleMembers";

export default function EditMemberPage() {
  const { pageTitle } = useOutletContext();
  const { memberName } = useParams();

  // Find member by name
  const currMember = MEMBERS.find((m) => m.name === memberName);

  // Local state for editable fields
  const [memberData, setMemberData] = useState({
    name: currMember?.name || "",
    type: currMember?.memberType || "",
    membership: currMember?.membership || "",
    contactNumber: currMember?.contactNumber || "",
    email: currMember?.email || "",
    waterMontly: currMember?.waterMontly || "",
  });

  // Dropdown options
  const status = ["Monthly", "Quarterly", "Annual"];
  const memberTypes = ["Student", "Regular", "VIP"];
  const waterMonthly = ["YES", "NO"];

  // Handle input changes
  const handleChange = (field, value) => {
    setMemberData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle save
  const handleSave = () => {
    console.log("Updated Member:", memberData);
    alert("Member details updated successfully!");
    // Here you could call a backend update function or update global state
  };

  return (
    <MainContentLayout pageTitle={`${pageTitle} > Edit Member`}>
      <div className="flex min-h-full w-full flex-col items-center justify-center gap-8 overflow-y-auto p-4">
        <h2 className="text-center text-base font-semibold sm:text-lg lg:text-xl xl:text-2xl">
          INPUT MEMBER NEW CREDENTIALS
        </h2>

        <div className="flex w-full max-w-xl flex-col gap-3">
          <InputField
            label="Name:"
            value={memberData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <DropdownField
            label="Member Type:"
            value={memberData.type}
            options={memberTypes}
            onChange={(e) => handleChange("type", e.target.value)}
          />

          <DropdownField
            label="Status:"
            value={memberData.membership}
            options={status}
            onChange={(e) => handleChange("membership", e.target.value)}
          />

          <InputField
            label="Contact:"
            value={memberData.contactNumber}
            onChange={(e) => handleChange("contactNumber", e.target.value)}
          />

          <InputField
            label="Email Address:"
            value={memberData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <DropdownField
            label="Water (Monthly):"
            value={memberData.waterMontly}
            options={waterMonthly}
            onChange={(e) => handleChange("waterMontly", e.target.value)}
          />

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full cursor-pointer rounded-md bg-black/80 py-2 text-sm font-semibold text-yellow-600 transition hover:bg-black/90 sm:text-base lg:text-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </MainContentLayout>
  );
}

/* 🔸 Reusable Text Input Field */
function InputField({ label, value, onChange }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white p-2 shadow-sm">
      <label className="text-xs font-semibold sm:text-[12px] lg:text-lg">
        {label}
      </label>
      <input
        type="text"
        className="flex-1 text-xs font-semibold text-yellow-600 outline-none sm:text-[12px] lg:text-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

/* 🔸 Reusable Dropdown Field */
function DropdownField({ label, value, options, onChange }) {
  return (
    <div className="flex flex-col gap-1 rounded-md bg-white p-2 shadow-sm">
      <label className="text-xs font-semibold sm:text-[12px] lg:text-lg">
        {label}
      </label>
      <select
        className="cursor-pointer rounded-md border border-neutral-600 p-1 text-xs text-gray-800 outline-0 sm:text-sm md:text-base lg:text-lg"
        value={value}
        onChange={onChange}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
