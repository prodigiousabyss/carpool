import { NavLink } from "react-router-dom";
import { LeftPanel } from "../../Components/LeftPanel/leftPanel";
import { RightPanel } from "../../Components/RightPanel/rightPanel";
import rides from "./../../Images/myrides.svg";

const myRides = [{
  id: 1,
  type: "Carpool Go",
  dateTime: "July 23 2023, 8:44PM",
  Heading: "Sapphire Mall Internal Walkway, Orchid Petals, Block S, Uppal Southend, Sector 49, Gurugram, Haryana 122018, India",
  to: "67A, Badshahpur Sohna Rd Hwy, Near ISKON Temple, Gurugram, Haryana 122002, India",
  from: "DG 14, Rodeo Drive, Arcadia, South City II, Sector 49, Gurugram, Haryana 122018, India"
},
{
  id: 2,
  type: "Carpool Go",
  dateTime: "July 23 2023, 8:44PM",
  Heading: "Sapphire Mall Internal Walkway, Orchid Petals, Block S, Uppal Southend, Sector 49, Gurugram, Haryana 122018, India",
  to: "67A, Badshahpur Sohna Rd Hwy, Near ISKON Temple, Gurugram, Haryana 122002, India",
  from: "DG 14, Rodeo Drive, Arcadia, South City II, Sector 49, Gurugram, Haryana 122018, India"
},
{
    id: 3,
    type: "Carpool Go",
    dateTime: "July 23 2023, 8:44PM",
    Heading: "Sapphire Mall Internal Walkway, Orchid Petals, Block S, Uppal Southend, Sector 49, Gurugram, Haryana 122018, India",
    to: "67A, Badshahpur Sohna Rd Hwy, Near ISKON Temple, Gurugram, Haryana 122002, India",
    from: "DG 14, Rodeo Drive, Arcadia, South City II, Sector 49, Gurugram, Haryana 122018, India"
},
{
  id: 4,
  type: "Carpool Go",
  dateTime: "July 23 2023, 8:44PM",
  Heading: "Sapphire Mall Internal Walkway, Orchid Petals, Block S, Uppal Southend, Sector 49, Gurugram, Haryana 122018, India",
  to: "67A, Badshahpur Sohna Rd Hwy, Near ISKON Temple, Gurugram, Haryana 122002, India",
  from: "DG 14, Rodeo Drive, Arcadia, South City II, Sector 49, Gurugram, Haryana 122018, India"
}]



export const Rides = () => {
  return (
  <div className="flex justify-center w-full h-full px-4 py-10 overflow-y-auto">
    <LeftPanel />
    <div className="w-[40rem]">
      <p className="font-bold text-lg mb-2">Past Rides</p>
      <img src={rides} alt="rides" className="" />
      <p className="font-bold my-2">You have no upcoming trips</p>
      <p className="my-1">Would you like to plan your next trip?</p>
      <div className=" text-white my-3 flex justify-center">
      <NavLink to="/" className="w-max p-2 bg-black rounded-md">Reserve your ride</NavLink>
      </div>
      {myRides.map(mr => <div className="border-2 border-gray-400 rounded-2xl w-full h-72 my-6"> 
      <div className="flex mt-4 px-[0.7rem] font-medium">
        <div>{mr.type}</div>
        <div>{mr.dateTime}</div>
      </div>
      <div className="font-bold px-4 pt-4">
        <div>{mr.Heading}</div>
      </div>
      <div className="flex flex-col mt-4 font-normal text-sm space-y-10 px-10 text-left">
        <div>⚫ {mr.from}</div>
        <div className="mt-4">⬛ {mr.to}</div>
      </div>
      </div>)}
    </div>
    <RightPanel />
  </div>
  )
};
