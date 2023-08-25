// import { useState } from "react"

export const Modal = ({ show, setShow }) => {
  if (show) {
    return (
      <div
        className="w-24 h-24 p-4 bg-black text-white absolute rounded-md right-[0.75rem] top-14 drop-shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button>Settings</button>
        <button>Help</button>
      </div>
    );
  }

  return null;
};
