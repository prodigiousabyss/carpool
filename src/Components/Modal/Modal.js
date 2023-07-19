// import { useState } from "react"

export const Modal = ({ show, setShow }) => {
    if (show) {
        return (
            <div className="w-24 h-24 bg-black text-white absolute right-[0.75rem] top-16 z-50">
                <button>Settings</button>
                <button>Help</button>
            </div>
        )
    }

    return null;
}