export const RequestRides = () => {

    const rideOptions = [
        {
            driverName: "Niko",
            isVerified: "Verified",
            tripFare: "500₹",
            LeavingFrom: "Delhi",
            GoingTo: "Jaipur",
            LeavingTime: "6:00PM",
            ArrivingTime: "10:00PM",
        },
        {
            driverName: "Olive",
            isVerified: "Not Verified",
            LeavingFrom: "Delhi",
            GoingTo: "Jaipur",
            LeavingTime: "6:00PM",
            ArrivingTime: "10:00PM",
            tripFare: "400₹",
        },
        {
            driverName: "Slyvia",
            isVerified: "Verified",
            LeavingFrom: "Delhi",
            GoingTo: "Jaipur",
            LeavingTime: "6:00PM",
            ArrivingTime: "10:00PM",
            tripFare: "300₹",
        },
        {
            driverName: "Ash",
            isVerified: "Verified",
            LeavingFrom: "Delhi",
            GoingTo: "Jaipur",
            LeavingTime: "6:00PM",
            ArrivingTime: "10:00PM",
            tripFare: "600₹",
        }
    ]


    return (
        <div className="flex justify-center w-full h-full my-4">
            <div>Left</div>
            <div>
        {rideOptions.map(rd => 
        <div className="border-2 w-[36rem] h-[10rem] my-4 rounded-xl"> 
            <div className="flex flex-col">
                    <div className="">{rd.LeavingTime}</div>
                    <div>{rd.ArrivingTime}</div>
                <div>
                    <div>{rd.LeavingFrom}</div>
                    <div>{rd.GoingTo}</div>
                </div>
                    <div>{rd.tripFare}</div>
                <div></div>
            </div>
            <div className="flex mt-4 px-[0.7rem] space-x-[22rem] font-medium">
                <div>{rd.driverName}</div>
                <div>{rd.isVerified}</div>
            </div>
        </div>)}
            </div>
            <div>Right</div>
        </div>
    )
}