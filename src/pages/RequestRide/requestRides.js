export const RequestRides = () => {

    const rideOptions = [
        {
            driverName: "Niko",
            isVerified: "Verified",
            dateAndTime: "6:00PM",
            tripFare: "500₹",
        },
        {
            driverName: "Olive",
            isVerified: "Not Verified",
            dateAndTime: "7:00PM",
            tripFare: "400₹",
        },
        {
            driverName: "Slyvia",
            isVerified: "Verified",
            dateAndTime: "3:00PM",
            tripFare: "300₹",
        },
        {
            driverName: "Ash",
            isVerified: "Verified",
            dateAndTime: "2:00PM",
            tripFare: "600₹",
        }
    ]


    return (
        <div className="flex justify-center w-full h-full my-4">
            <div>Left</div>
            <div>
        {rideOptions.map(rd => 
        <div className="border-2 w-[36rem] my-4 rounded-xl"> 
            <div className="font-bold text-lg">
                {rd.tripFare}
            </div>
            <div className="flex mt-4 px-[0.7rem] space-x-[22rem] font-medium">
                <div>{rd.driverName}</div>
                <div>{rd.isVerified}</div>
            </div>
            <div>
                {rd.dateAndTime}
            </div>
        </div>)}
            </div>
            <div>Right</div>
        </div>
    )
}