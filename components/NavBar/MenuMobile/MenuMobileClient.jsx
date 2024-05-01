"use client"
import { useEffect, useState } from "react"
function MenuMobileClient({ children }) {
    const [isOpen, setOpen] = useState(false)
    const clickHandler = (event) => {
        if (event.target.tagName === "BUTTON")
            return setOpen(!isOpen)
        if (event.target.tagName === "A")
            setOpen(false)
    }

    return (
        <div onClick={clickHandler}>
            <button className="relative navbar-burger flex items-center text-white pr-3 z-50" >
                <svg viewBox="0 0 100 100" className={`block h-7 w-7 fill-current pointer-events-none transform -translate-y-2 ${isOpen && "opened"}`}>
                    <title>Mobile menu</title>
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <div className={`fixed  bg-gray-900 flex inset-0 h-full w-full ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className={`w-full h-full flex  transition  ease duration-300 transform  ${isOpen ? "opacity-100 translate-y-0 transition ease duration-300 transform " : "opacity-0 -translate-y-12  "}`}>

                    {children}
                </div>
            </div>
        </div>
    )
}
// <div className={` ${isOpen ? "flex opacity-100 tranform translate-x-0 transition  ease duration-1000 " : "flex transform translate-y-11  opacity-0 pointer-events-none"} `}>
export default MenuMobileClient
