import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import editIcon from "../../assets/editIcon.png";
import addMembersIcon from "../../assets/addMembersIcon.png";
import { MEMBERS } from "../../sampleMembers";

const CATEGORIES = [
  { category: "Name", flex: "flex-2" },
  { category: "Type", flex: "flex-1" },
  { category: "Membership", flex: "flex-1" },
  { category: "Email", flex: "flex-3" },
  { category: "Contact Number", flex: "flex-1" },
  { category: "Edit", flex: "flex-1" },
];

export default function MembershipPage() {
  const { pageTitle } = useOutletContext();

  return (
    <MainContentLayout pageTitle={pageTitle}>
      <Header />
      <Categories />
      <MemberList />
    </MainContentLayout>
  );
}

function Header() {
  return (
    <div className="flex flex-1 justify-between p-2">
      <input
        type="text"
        placeholder="Search Member"
        className="w-1/4 border bg-white px-2 py-2 outline-0"
      />
      <Link
        to="add member"
        className="flex cursor-pointer rounded-xl bg-yellow-600 p-2 font-semibold hover:brightness-95"
      >
        <img src={addMembersIcon} alt="add member" />
        <button className="cursor-pointer">+ Members</button>
      </Link>
    </div>
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
      <h3
        className={`${clientDetailStyle} flex-2 justify-start overflow-x-auto`}
      >
        {client.name}
      </h3>
      <h3 className={`${clientDetailStyle} flex-1`}>{client.memberType}</h3>
      <h3 className={`${clientDetailStyle} flex-1`}>{client.status}</h3>
      <h3
        className={`${clientDetailStyle} flex-3 justify-start overflow-x-auto`}
      >
        {client.email}
      </h3>
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
      <button className="block cursor-pointer font-semibold text-white duration-150 hover:-translate-y-0.5">
        <img src={editIcon} alt="editIcon" className="max-xl:max-h-6" />
      </button>
    </Link>
  );
}
