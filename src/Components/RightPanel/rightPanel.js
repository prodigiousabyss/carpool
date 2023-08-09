import { NavLink } from 'react-router-dom';
import scar from './../../Images/car.svg';

export const RightPanel = () => {
  return (
    <div className="w-72 text-left sticky top-0 mx-16">
      <img src={scar} alt="car" className="" />
      <p className="font-bold mt-2">Get a ride now!</p>
      <p className="mt-1">Book a ride from a web browser, no app install necessary.</p>
      <div className="mt-4">
        <NavLink to="/" className="bg-black text-white rounded-md p-2">
          Request a Ride
        </NavLink>
      </div>
    </div>
  );
};
