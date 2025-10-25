import MainContentLayout from "../../layout/MainContentLayout";
import cautionIcon from "../../assets/cautionIcon.png";
import Button from "../../components/Button";

export default function RequestPage() {
  return (
    <MainContentLayout pageTitle="Request">
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-4">
        <img src={cautionIcon} alt="" />
        <h1 className="text-3xl font-semibold">
          There's Non-member wants to enter
        </h1>
        <div className="flex gap-8">
          <Button>Allow</Button>
          <Button>Deny</Button>
        </div>
      </div>
    </MainContentLayout>
  );
}
