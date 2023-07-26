import rides from "./../../Images/myrides.svg";
import { LeftPanel } from "../../Components/LeftPanel/leftPanel";
import { RightPanel } from "../../Components/RightPanel/rightPanel";


export const Profile = () => {
  return (
  <div className="flex justify-center w-full h-full px-4 py-10">
    <LeftPanel />
    <div className="w-[40rem]">
      <p className="font-bold text-lg my-1">Past Rides</p>
      <img src={rides} alt="rides" className="" />
      <p className="font-bold my-2">You have no upcoming trips</p>
      <p className="my-2">Would you like to plan your next trip?</p>
      <button className="bg-black p-3 text-white rounded-md my-3">Reserve your ride</button>
      </div>
    <RightPanel />
  </div>
  )
};
