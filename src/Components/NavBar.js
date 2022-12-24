import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const NavBar = () => {

    // use react-router-dom to get the current path
    const location = useLocation();
    return (
        <div className=' absolute top-0 w-full shadow-md'>
            <div className="flex justify-between items-center w-full h-16 bg-gray-200">
                <div className="flex justify-center items-center w-1/4 h-full">
                    <div className="text-2xl font-bold cursor-pointer">
                        HASO
                    </div>
                </div>
                <div className="flex  justify-around items-center w-1/6 h-full gap-9 text-red-500">
                    <div className={`font-bold drop-shadow cursor-pointer ${location.pathname === "/" ? "text-green-600" : "hover:text-red-600"} `}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={`font-bold drop-shadow cursor-pointer  ${location.pathname === "/images" ? "text-green-600" : "hover:text-red-600"} `}>
                        <Link to="/images">Images</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBar