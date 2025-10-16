import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import { useState } from "react";
import Loader from "../../components/Loader";

const CATEGORIES = [
  "Name",
  "Membership",
  "Type",
  "Contact",
  "Time In",
  "Time Out",
];

const CLIENTS = [
  {
    Name: "John Doe",
    Membership: "Gold",
    Type: "Regular",
    Contact: "09171234567",
    "Time In": "2025-10-16T08:30:00",
    "Time Out": "2025-10-16T10:45:00",
  },
  {
    Name: "Jane Smith",
    Membership: "Silver",
    Type: "Walk-in",
    Contact: "09283456789",
    "Time In": "2025-10-16T09:00:00",
    "Time Out": "2025-10-16T09:50:00",
  },
  {
    Name: "Carlos Reyes",
    Membership: "Platinum",
    Type: "Regular",
    Contact: "09180001234",
    "Time In": "2025-10-16T07:45:00",
    "Time Out": "2025-10-16T10:10:00",
  },
  {
    Name: "Anna Lim",
    Membership: "Basic",
    Type: "Walk-in",
    Contact: "09091234567",
    "Time In": "2025-10-16T11:10:00",
    "Time Out": "2025-10-16T12:00:00",
  },
  {
    Name: "Patrick Cruz",
    Membership: "Gold",
    Type: "Regular",
    Contact: "09995551234",
    "Time In": "2025-10-16T06:55:00",
    "Time Out": "2025-10-16T09:05:00",
  },
  {
    Name: "Sophia Dela Torre",
    Membership: "Silver",
    Type: "Regular",
    Contact: "09172345678",
    "Time In": "2025-10-16T10:20:00",
    "Time Out": "2025-10-16T12:45:00",
  },
  {
    Name: "John Doe",
    Membership: "Gold",
    Type: "Regular",
    Contact: "09171234567",
    "Time In": "2025-10-16T08:30:00",
    "Time Out": "2025-10-16T10:45:00",
  },
  {
    Name: "Jane Smith",
    Membership: "Silver",
    Type: "Walk-in",
    Contact: "09283456789",
    "Time In": "2025-10-16T09:00:00",
    "Time Out": "2025-10-16T09:50:00",
  },
  {
    Name: "Carlos Reyes",
    Membership: "Platinum",
    Type: "Regular",
    Contact: "09180001234",
    "Time In": "2025-10-16T07:45:00",
    "Time Out": "2025-10-16T10:10:00",
  },
  {
    Name: "Anna Lim",
    Membership: "Basic",
    Type: "Walk-in",
    Contact: "09091234567",
    "Time In": "2025-10-16T11:10:00",
    "Time Out": "2025-10-16T12:00:00",
  },
  {
    Name: "Patrick Cruz",
    Membership: "Gold",
    Type: "Regular",
    Contact: "09995551234",
    "Time In": "2025-10-16T06:55:00",
    "Time Out": "2025-10-16T09:05:00",
  },
  {
    Name: "Sophia Dela Torre",
    Membership: "Silver",
    Type: "Regular",
    Contact: "09172345678",
    "Time In": "2025-10-16T10:20:00",
    "Time Out": "2025-10-16T12:45:00",
  },
  {
    Name: "Michael Tan",
    Membership: "Platinum",
    Type: "Regular",
    Contact: "09223334444",
    "Time In": "2025-10-16T07:15:00",
    "Time Out": "2025-10-16T08:50:00",
  },
  {
    Name: "Liza Navarro",
    Membership: "Basic",
    Type: "Walk-in",
    Contact: "09198887766",
    "Time In": "2025-10-16T08:00:00",
    "Time Out": "2025-10-16T09:00:00",
  },
  {
    Name: "Ryan Santos",
    Membership: "Gold",
    Type: "Regular",
    Contact: "09337778888",
    "Time In": "2025-10-16T09:30:00",
    "Time Out": "2025-10-16T11:00:00",
  },
  {
    Name: "Bea Gutierrez",
    Membership: "Silver",
    Type: "Walk-in",
    Contact: "09456667777",
    "Time In": "2025-10-16T10:45:00",
    "Time Out": "2025-10-16T11:20:00",
  },
];

export default function DailyLogPage({ rerender }) {
  const { pageTitle } = useOutletContext();
  const textResponsive = "2xl:text-sm max-2xl:text-[10px] ";

  return (
    <MainContentLayout pageTitle={pageTitle} buttonShow={false}>
      <div className="sticky top-0 flex flex-col gap-8 bg-neutral-300 pt-4 font-semibold shadow-md">
        <h1 className="w-full text-center text-4xl text-shadow-yellow-500 text-shadow-sm">Member's Information</h1>
        <ul className="grid grid-cols-7 text-2xl">
          {CATEGORIES.map((category, i) => (
            <li
              key={category}
              className={`${i === 0 && "col-span-2"} border-r border-black/20 bg-yellow-500 p-2 ${textResponsive}`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <ul className="py-4">
        {CLIENTS.map((client, index) => (
          <li
            key={index}
            className="grid grid-cols-7 border border-neutral-400"
          >
            {CATEGORIES.map((c, i) => (
              <span
                key={c}
                className={`${i === 0 && "col-span-2"} border border-neutral-400 p-2 ${textResponsive}`}
              >
                {client[c]}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </MainContentLayout>
  );
}
