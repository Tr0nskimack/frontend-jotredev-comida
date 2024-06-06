import React from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { GrNotes } from "react-icons/gr";
import { LuSheet } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { PiInvoice } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import fondo from "/young.jpg";

export const Header = () => {
  return (
    <div className="">
      <div className="p-3 flex justify-between items-center">
        {/* logo */}
        <div>
          <h1>logo</h1>
        </div>
        {/* menu */}
        <div className="bg-white w-[500px] h-[50px] rounded-full flex justify-between items-center px-1 text-[12px] shadow-sm">
          <div className="bg-bgBoton active:bg-green-500 transition-all duration-200 shadow-md rounded-full h-[40px] w-[70px] flex items-center justify-center gap-1">
            <FcHome size={16} />
            <Link>Inicio</Link>
          </div>
          <div className="flex gap-1">
            <GrNotes size={16} />
            <Link>Menu</Link>
          </div>
          <div className="flex gap-1">
            <LuSheet size={16} />
            <Link>ordenes</Link>
          </div>
          <div className="flex gap-1">
            <FaRegClock size={16} />
            <Link>Historial</Link>
          </div>
          <div className="flex gap-1">
            <PiInvoice size={16} />
            <Link>Facturas</Link>
          </div>
        </div>
        {/* user */}
        <div>
          <div className="bg-white w-[150px] h-[50px] rounded-full px-3 text-[12px] shadow-sm flex items-center justify-between">
            
              
              <img src={fondo} className="w-8 h-8  rounded-full" alt="" />
              <h1 className="font-semibold">Marcano </h1>
              <div className="bg-gray-200 p-[5px] rounded-full">
              <GoGear size={16} />

              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
