import React from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { GrNotes } from "react-icons/gr";
import { LuSheet } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { PiInvoice } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import fondo from "/young.jpg";
import { CiMenuFries } from "react-icons/ci";

export const Header = () => {
  
  const menuCentral = [
    {
      nombre: "Inicio",
      icono: <FcHome size={20}/>,
    },
    {
      nombre: "Menu",
      icono: <GrNotes size={20}/>,
    },
    {
      nombre: "Ordenes",
      icono: <LuSheet size={20}/>,
    },
    {
      nombre: "Historial",
      icono: <PiInvoice size={20}/>,
    },
    {
      nombre: "Facturas",
      icono: <GoGear size={20}/>,
    },
  ]
  console.log(menuCentral)
  return (
    <div className="">
      <div className="p-3 flex justify-between items-center">
        {/* logo */}
        <div>
          <h1>logo</h1>
        </div>
        {/* menu */}
        <div className="hidden lg:block  bg-white w-[500px] h-[45px] rounded-full px-1 text-[12px] shadow-sm ">
          <div className="flex space-x-8 mt-[2px] items-center">
            {
              menuCentral.map((menu) => {
                return (
                  <div className="flex gap-1 hover:bg-gray-100 h-[40px] w-[70px] items-center justify-center rounded-full transition-all duration-200 p-1">
                    {menu.icono}
                    <Link>{menu.nombre}</Link>
                  </div>
                )
              })
            }
            

          </div>
        </div>
        {/* user */}
        <div>
          <div className="bg-white w-[190px] h-[50px] rounded-full px-3 text-[12px] shadow-sm flex items-center justify-between">


            <img src={fondo} className="w-8 h-8  rounded-full" alt="" />
            <h1 className="font-semibold">Marcano </h1>
            <div className="bg-gray-200 p-[5px] rounded-full">
              <GoGear size={16} />

            </div>
            <div className="bg-gray-200 p-[5px] rounded-full lg:hidden">
              <CiMenuFries size={16} />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
