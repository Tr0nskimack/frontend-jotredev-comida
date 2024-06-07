import React from "react";
import { CiSearch } from "react-icons/ci";

export const FilterFood = () => {
  const menu = [
    {
      nombre: "Todos",
    },
    {
      nombre: "Hamburguesas",
    },
    {
      nombre: "Pizza",
    },
    {
      nombre: "Tacos",
    },
    {
      nombre: "Pollos",
    },
    {
      nombre: "Ensaladas",
    },
    {
      nombre: "pastas",
    },
    {
      nombre: "Lunches",
    },
    {
      nombre: "Refrescos",
    },
    {
      nombre: "Combos",
    },
  ];
  return (
    <div className="flex items-center px-3 mt-10 gap-2">
      <div className="max-w-[1225px] h-[45px] rounded-full flex border-gray-300 border-[1px] justify-between items-center text-[12px] shadow-sm px-1">
        {menu.map((item, index) => {
          return (
            <div className="px-3">
              <p className="font-semibold" key={index}>
                <button
                  className={
                    index % 10 === 0
                      ? "bg-bgBoton active:bg-green-500 transition-all duration-200 rounded-full h-[40px] w-[70px] flex items-center shadow-md justify-center "
                      : "hover:bg-gray-300 h-[40px] w-[90px] items-center justify-center rounded-full transition-all duration-200 p-1"
                  }
                >
                  {item.nombre}
                </button>
              </p>
            </div>
          );
        })}
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-[400px] h-[45px] bg-white flex border-gray-300 border-[1px] rounded-full text-[12px] shadow-sm px-7 items-center text-gray-400 outline-none relative "
          placeholder="Buscar Productos"
        >
          
        </input>
        <CiSearch className="absolute left-2 top-[18px] font-semibold text-green-500" />
      </div>
    </div>
  );
};
