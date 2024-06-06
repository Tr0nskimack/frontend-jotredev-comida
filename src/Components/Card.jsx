import React from "react";
import { GoPlus } from "react-icons/go";

export const Card = ({ data }) => {
  return (
    <div className="mt-6">
      <div className="w-[600px] h-[260px] bg-white flex border-gray-300 border-[1px] rounded-2xl text-[12px] shadow-sm  p-8">
        <div className="flex flex-col justify-between">
          {/* icono npmbre y descuento */}
          <div className="flex items-center gap-4">
            {/* icono */}
            <div>
              <img src={data.imagen} className="w-[50px]" alt="" />
            </div>
            {/* nombre y descuento */}
            <div>
              <span className="px-2 py-1 text-bgBoton font-extrabold bg-sombrabadget rounded-full text-[11px] tracking-widest">
                Descuento: {data.descuento}
              </span>
              <h1 className="font-bold text-[20px]  tracking-wider">
                {data.nombre}
              </h1>
            </div>
          </div>
          {/* descripcion */}
          <div>
            <p>{data.descripcion}</p>
          </div>

          {/* precio y boton */}
          <div className="flex justify-between items-center">
            <span className="text-[18px] font-bold">{data.precio}</span>
            <button  className="  bg-bgBoton rounded-full p-3 shadow-md active:bg-green-500 transition-all duration-200">
              
            <GoPlus size={18}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
