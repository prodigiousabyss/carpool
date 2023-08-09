import riding from '../../Images/Ride-with-Uber.webp';
import Car from '../../Images/car.webp';

export const RequestRides = () => {
  const rideOptions = [
    {
      driverName: 'Niko',
      isVerified: 'Verified',
      tripFare: '500₹',
      LeavingFrom: 'Delhi',
      GoingTo: 'Jaipur',
      LeavingTime: '6:00PM',
      ArrivingTime: '10:00PM',
      rating: '5 ★',
    },
    {
      driverName: 'Olive',
      isVerified: 'Not Verified',
      LeavingFrom: 'Delhi',
      GoingTo: 'Jaipur',
      LeavingTime: '6:00PM',
      ArrivingTime: '10:00PM',
      tripFare: '400₹',
      rating: '5 ★',
    },
    {
      driverName: 'Slyvia',
      isVerified: 'Verified',
      LeavingFrom: 'Delhi',
      GoingTo: 'Jaipur',
      LeavingTime: '6:00PM',
      ArrivingTime: '10:00PM',
      tripFare: '300₹',
      rating: '5 ★',
    },
    {
      driverName: 'Ash',
      isVerified: 'Verified',
      LeavingFrom: 'Delhi',
      GoingTo: 'Jaipur',
      LeavingTime: '6:00PM',
      ArrivingTime: '10:00PM',
      tripFare: '600₹',
      rating: '5 ★',
    },
  ];

  return (
    <div className="flex justify-center w-full h-full my-4">
      <div className="w-[20rem] text-left sticky top-0 mx-16">
        <img src={Car} alt="woman" className="" />
        <p className="font-bold text-xl my-2">Ways people move around the world!</p>
        <p className="font-normal text-md">The Carpool app gives you the power to get where you want to go.</p>
      </div>
      <div>
        {rideOptions.map((rd) => (
          <div className="border-2 w-[36rem] h-[10rem] my-4 rounded-xl drop-shadow-sm">
            <div className="flex items-start px-4 mt-4">
              <div className="space-y-2">
                <div>{rd.LeavingTime}</div>
                <div>{rd.ArrivingTime}</div>
              </div>
              <div className="relative mx-6 flex flex-col items-start">
                <div className="bg-black w-0.5 top-2 h-9 absolute left-[0.16rem]" />
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-black mr-2" />
                  {rd.LeavingFrom}
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 rounded-full bg-black mr-2" />
                  {rd.GoingTo}
                </div>
              </div>
              <div className="font-medium px-[20rem]">{rd.tripFare}</div>
            </div>
            <div className="flex flex-col items-start mt-4 px-[1rem]">
              <div className="flex flex-row space-x-4">
                <div className="font-medium">{rd.driverName}</div>
              </div>
              <div className="font-normal">{rd.rating}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[20rem] text-left sticky top-0 mx-16 z-0">
        <img src={riding} alt="car" className="" />
        <p className="my-2">
          Whether you're running an errand across town or exploring a city far from home, getting there should be easy.
        </p>
      </div>
    </div>
  );
};
