import { NavLink } from 'react-router-dom';
import { Logo } from '../../atoms/Icon/SVG/Logo';

export const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'http://localhost:3000/login';
  };

  return (
    <div className="text-white bg-black drop-shadow-md h-16 flex items-center px-8 justify-between z-40">
      <div className="flex items-center">
        <NavLink to="/">
          <Logo className="h-max w-24 left-0 m-4" />
        </NavLink>
        <NavLink to="/" className="m-2">
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
      <button className="text-md" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};
