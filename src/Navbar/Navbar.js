import { Logo } from '../atoms/Icon/SVG/Logo';

export const Navbar = () => {
  return (
    <div className="text-white bg-black drop-shadow-md h-16 flex items-center justify-start px-8">
      <Logo className="h-max w-24 left-0 m-4" />
      <div className="m-2">Navbar</div>
      <div className="m-2">Home</div>
      <div className="m-2">Profile</div>
      <div className="m-2">Rides</div>
    </div>
  );
};
