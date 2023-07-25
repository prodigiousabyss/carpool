import rides from "./../../Images/myrides.svg";
import scar from "./../../Images/car.svg";

const myRides = [{
  id: 1,
  type: "Carpool Go",
  dateTime: "July 23 2023, 8:44PM",
  to: "67A, Badshahpur Sohna Rd Hwy, Near ISKON Temple, Gurugram, Haryana 122002, India",
  from: "DG 14, Rodeo Drive, Arcadia, South City II, Sector 49, Gurugram, Haryana 122018, India"
},
{
  id: 2,
  type: "Carpool Go",
  dateTime: "July 23 2023, 8:44PM",
  to: "67A, Badshahpur Sohna Rd Hwy, Near ISKON Temple, Gurugram, Haryana 122002, India",
  from: "DG 14, Rodeo Drive, Arcadia, South City II, Sector 49, Gurugram, Haryana 122018, India"
},
{
    id: 3,
    type: "Carpool Go",
    dateTime: "July 23 2023, 8:44PM",
    to: "67A, Badshahpur Sohna Rd Hwy, Near ISKON Temple, Gurugram, Haryana 122002, India",
    from: "DG 14, Rodeo Drive, Arcadia, South City II, Sector 49, Gurugram, Haryana 122018, India"
},
{
  id: 4,
  type: "Carpool Go",
  dateTime: "July 23 2023, 8:44PM",
  to: "67A, Badshahpur Sohna Rd Hwy, Near ISKON Temple, Gurugram, Haryana 122002, India",
  from: "DG 14, Rodeo Drive, Arcadia, South City II, Sector 49, Gurugram, Haryana 122018, India"
}]



export const Rides = () => {
  return (
  <div className="flex justify-center w-full h-full py-10 overflow-y-auto">
    <div className="w-72 sticky top-0">
      <button></button>
      <button></button>
    </div>
    <div className="w-[40rem] mx-16">
      <p className="font-bold text-lg my-1">Past Rides</p>
      <img src={rides} alt="rides" className="" />
      <p className="font-bold my-2">You have no upcoming trips</p>
      <p className="my-2">Would you like to plan your next trip?</p>
      <button className="bg-black p-3 text-white rounded-md my-3">Reserve your ride</button>
      {myRides.map(mr => <div className="border-2 border-gray-400 rounded-2xl w-full h-72 my-6"> 
      <div className="flex space-x-[23rem] mt-2 px-1 font-medium">
        <div>{mr.type}</div>
        <div>{mr.dateTime}</div>
      </div>
      <div className="flex flex-col mt-10 font-normal text-sm space-y-10 px-10 text-left border-l-2">
      <div className="border-l-2 border-black pl-2">
        <div>From: {mr.from}</div>
        <div className="mt-4">To: {mr.to}</div>
        </div>
      </div>
      </div>)}
    </div>
    <div className="w-72 text-left sticky top-0">
    <img src={scar} alt="car" className="" />
    <p className="font-bold mt-2">
      Get a ride now!
    </p>
    <p className="mt-1">
    Book a ride from a web browser, no app install necessary.
    </p>
    <button className="mt-2 bg-black text-white rounded-md p-2">Request a Ride</button>
    </div>
  </div>
  )
};
