import { NavLink } from 'react-router-dom';
import { Logo } from '../atoms/Icon/SVG/Logo';

export const Navbar = () => {
  return (
    <div className="text-white bg-black drop-shadow-md h-16 flex items-center justify-start px-8">
      <Logo className="h-max w-24 left-0 m-4" />
      <NavLink to="/home" className="m-2">
        {' '}
        Home{' '}
      </NavLink>
      <NavLink to="/profile" className="m-2">
        Profile
      </NavLink>
      <NavLink to="/rides" className="m-2">
        Rides
      </NavLink>
    </div>
  );
};
