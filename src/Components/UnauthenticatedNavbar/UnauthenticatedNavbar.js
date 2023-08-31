import { Logo } from '../../atoms/Icon/SVG/Logo';

export const UnauthNavbar = () => {
  return (
    <div className="text-white bg-black drop-shadow-md h-16 flex items-center px-8 justify-between z-40">
      <Logo className="h-max w-24 left-0 m-4" />
    </div>
  );
};
