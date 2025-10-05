export default function DashboardPage() {
  return (
    <div className="relative z-1 flex flex-1 flex-col max-md:pb-40">
      {/* yellow top */}
      <div className="flex flex-2/5 flex-col justify-between bg-[#f9a826] p-4 pb-0 max-xl:gap-4 md:p-12 md:pb-0">
        <h1 className="mx-auto w-[88%] text-5xl">Dashboard</h1>
        {/* topbox */}
        <div className="mx-auto flex w-[88%] flex-col justify-between rounded-tl-2xl rounded-tr-2xl border-1 bg-white px-4 md:pt-4 xl:h-[46%] 2xl:h-[56%] 2xl:px-8 2xl:pt-10">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Welcome to J Cruz Gym Dashboard!
          </h1>
          <h4 className="text-center text-sm xl:text-xl 2xl:text-2xl">
            A dashboard gym system ensures a seamless experience by
          </h4>
        </div>
      </div>
      {/* white bottom */}
      <div className="flex flex-3/5 flex-col bg-[#ebebeb] p-4 pt-0 md:p-12 md:pt-0">
        {/* bottombox */}
        <div className="mx-auto flex w-[88%] flex-col justify-between rounded-br-2xl rounded-bl-2xl bg-black px-4 pb-4 xl:h-[46%] 2xl:h-[56%] 2xl:px-8 2xl:pb-10">
          <h4 className="text-center text-sm text-white xl:text-xl 2xl:text-2xl">
            streamlining all aspects of gym management in one centralized
            platform.
          </h4>
        </div>
        <div className="md:text-md flex flex-1 flex-col gap-4 pt-8 sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          <div className="flex justify-between">
            <h4 className="max-w-[36%] flex-1 text-[#868686]">
              Log Session - Identifies who logs with RFID and without.
            </h4>
            <h4 className="max-w-[36%] flex-1 text-[#868686]">
              Daily Log - Viewing members and modifying credentials. Tracks
              overall client’s session history.
            </h4>
          </div>
          <div className="flex justify-center">
            <h4 className="max-w-[36%] flex-1 text-[#868686]">
              Revenue - Tracking overall revenue for a month, and year.
              Exclusive Admin access.
            </h4>
          </div>
          <div className="flex justify-between">
            <h4 className="max-w-[36%] flex-1 text-[#868686]">
              Membership - Handles adding of new members.
            </h4>
            <h4 className="max-w-[36%] flex-1 text-[#868686]">
              Inventory - Modifying and handling products in gym.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
