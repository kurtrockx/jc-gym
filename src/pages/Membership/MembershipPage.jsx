import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";

const CATEGORIES = [
  { category: "Name", flex: "flex-2" },
  { category: "Type", flex: "flex-1" },
  { category: "Membership", flex: "flex-1" },
  { category: "Email", flex: "flex-3" },
  { category: "Contact Number", flex: "flex-1" },
  { category: "Edit", flex: "flex-1" },
];

const MEMBERS = [
  {
    name: "John Doe",
    policyType: "Gold",
    status: "Active",
    email: "john.doe@example.com",
    contactNumber: "123-456-7890",
  },
  {
    name: "Jane Smith",
    policyType: "Silver",
    status: "Inactive",
    email: "jane.smith@example.com",
    contactNumber: "987-654-3210",
  },
  {
    name: "Alice Johnson",
    policyType: "Platinum",
    status: "Active",
    email: "alice.johnson@example.com",
    contactNumber: "456-789-0123",
  },
  {
    name: "Bob Brown",
    policyType: "Bronze",
    status: "Inactive",
    email: "bob.brown@example.com",
    contactNumber: "321-654-9870",
  },
  {
    name: "Charlie Davis",
    policyType: "Gold",
    status: "Active",
    email: "charlie.davis@example.com",
    contactNumber: "789-012-3456",
  },
  {
    name: "John Doe",
    policyType: "Gold",
    status: "Active",
    email: "john.doe@example.com",
    contactNumber: "123-456-7890",
  },
  {
    name: "Jane Smith",
    policyType: "Silver",
    status: "Inactive",
    email: "jane.smith@example.com",
    contactNumber: "987-654-3210",
  },
  {
    name: "Alice Johnson",
    policyType: "Platinum",
    status: "Active",
    email: "alice.johnson@example.com",
    contactNumber: "456-789-0123",
  },
  {
    name: "Bob Brown",
    policyType: "Bronze",
    status: "Inactive",
    email: "bob.brown@example.com",
    contactNumber: "321-654-9870",
  },
  {
    name: "Charlie Davis",
    policyType: "Gold",
    status: "Active",
    email: "charlie.davis@example.com",
    contactNumber: "789-012-3456",
  },
  {
    name: "John Doe",
    policyType: "Gold",
    status: "Active",
    email: "john.doe@example.com",
    contactNumber: "123-456-7890",
  },
  {
    name: "Jane Smith",
    policyType: "Silver",
    status: "Inactive",
    email: "jane.smith@example.com",
    contactNumber: "987-654-3210",
  },
  {
    name: "Alice Johnson",
    policyType: "Platinum",
    status: "Active",
    email: "alice.johnson@example.com",
    contactNumber: "456-789-0123",
  },
  {
    name: "Bob Brown",
    policyType: "Bronze",
    status: "Inactive",
    email: "bob.brown@example.com",
    contactNumber: "321-654-9870",
  },
  {
    name: "Charlie Davis",
    policyType: "Gold",
    status: "Active",
    email: "charlie.davis@example.com",
    contactNumber: "789-012-3456",
  },
];

export default function MembershipPage() {
  const { pageTitle } = useOutletContext();

  return (
    <MainContentLayout pageTitle={pageTitle}>
      <Categories />
      <MemberList />
    </MainContentLayout>
  );
}

function Categories() {
  const textResponsive =
    "2xl:text-sm max-2xl:text-[10px] max-lg:text-[6px] max-md:text-[4px]";
  const paddingResponsive = "max-xl:px-1 max-xl:py-2 max-lg:px-0.5 py-4";

  return (
    <div className="sticky top-0 flex border border-[#450509] bg-neutral-600 px-4 font-semibold text-white shadow-sm">
      {CATEGORIES.map((c, i) => (
        <h2
          key={i}
          className={`mx-auto max-w-[20%] border-r border-black px-2 text-center whitespace-nowrap uppercase ${textResponsive} ${paddingResponsive} ${i === CATEGORIES.length - 1 && "border-transparent"} ${c.flex}`}
        >
          {c.category}
        </h2>
      ))}
    </div>
  );
}

function MemberList() {
  return (
    <div className="flex flex-col gap-y-2 px-2 py-4">
      {MEMBERS.map((client, i) => {
        return <Client client={client} key={i} />;
      })}
    </div>
  );
}

function Client({ client }) {
  const textResponsive =
    "2xl:text-sm max-2xl:text-[10px] max-lg:text-[6px] max-md:text-[4px]";
  const paddingResponsive = "max-xl:p-1 max-lg:px-0.25 max-lg:py-0.25";
  const clientDetailStyle = `max-w-[20%] border-r p-2 text-xl whitespace-nowrap flex items-center truncate justify-center ${textResponsive} ${paddingResponsive}`;

  return (
    <div className="flex flex-1 border px-2">
      <h3 className={`${clientDetailStyle} flex-2`}>{client.name}</h3>
      <h3 className={`${clientDetailStyle} flex-1`}>{client.policyType}</h3>
      <h3 className={`${clientDetailStyle} flex-1`}>{client.status}</h3>
      <h3 className={`${clientDetailStyle} flex-3`}>{client.email}</h3>
      <h3 className={`${clientDetailStyle} flex-1`}>{client.contactNumber}</h3>
      <div
        className={`flex max-w-[20%] flex-1 items-center justify-center p-2 ${paddingResponsive} ${textResponsive}`}
      >
        <ClientsButton clientName={client.name} />
      </div>
    </div>
  );
}

//COMPONENTS
function ClientsButton({ clientName }) {
  return (
    <Link to={clientName}>
      <button className="block cursor-pointer rounded-lg bg-green-700 px-2 py-1 font-semibold text-white duration-150 hover:-translate-y-0.5">
        VIEW
      </button>
    </Link>
  );
}
