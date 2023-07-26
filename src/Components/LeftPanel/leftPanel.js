import { NavLink } from "react-router-dom";

export const LeftPanel = () => {
    return (
        <div>
            <div className="w-72 sticky top-0 flex flex-col">
            <NavLink to="/" className="text-black font-medium hover:bg-gray-200 w-[14rem] p-3 text-left border-l-4 border-l-transparent">Ride Now</NavLink>
            <NavLink to="/profile" className="text-black font-medium hover:bg-gray-200 w-[14rem] p-3 text-left border-l-4 border-l-transparent">Profile</NavLink>
            <NavLink to="/rides" className="text-black font-medium hover:bg-gray-200 w-[14rem] p-3 text-left border-l-4 border-l-transparent">My Rides</NavLink>
            </div>
        </div>
    )
}