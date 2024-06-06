import React from "react";
import { Card } from "./Card";
import hamburguesa from "/hamburguesa.png";
import { GoPlus } from "react-icons/go";
export const Cards = ({ dataImgs }) => {
  return (
    <div className="px-3 flex   gap-3">
      <div className="max-w-[1250px] grid sm:grid-cols-1 md:grid-cols-2  gap-7">
        {dataImgs.map((data) => {
          return (
            <div>
              <Card key={data.nombre} data={data} />
            </div>
          );
        })}
      </div>
      {/* search and payments */}
      <div>
        <div className="w-[400px] h-[700px] bg-white flex border-gray-300 border-[1px] rounded-2xl text-[12px] shadow-sm p-8 mt-6 ">
          <div className="w-full">
            <h1 className="text-[17px] font-semibold tracking-wide">
              Detalles del plan
            </h1>
            <div className="flex items-center justify-between gap-2  rounded-lg p-2 mt-8">
              {/* nombre e icono e circulo gris */}
              <div className="flex flex-col  w-full mt-3">
                <div className="border-gray-200 border-[1px] p-3 mt-3 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img src={hamburguesa} className="w-8" alt="" />
                      <h1 className="text-[14px] font-bold tracking-wide">
                        Hamburgusa beacon
                      </h1>
                    </div>
                    <div>
                      <button className="bg-gray-200 rounded-full  p-3"></button>
                    </div>
                  </div>

                  <div className="flex justify-between w-full items-center mt-3">
                    <div className="flex gap-2 items-center">
                      <button className="  bg-bgBoton rounded-full p-[3px] shadow-md active:bg-green-500 transition-all duration-200">
                        <GoPlus size={18} />
                      </button>
                      <button className="  bg-bgBoton rounded-full p-[3px] shadow-md active:bg-green-500 transition-all duration-200">
                        <GoPlus size={18} />
                      </button>
                    </div>
                    <p className="font-bold text-[14px]">19.299</p>
                  </div>
                </div>

                <div className="border-gray-200 border-[1px] p-3 mt-3 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img src={hamburguesa} className="w-8" alt="" />
                      <h1 className="text-[14px] font-bold tracking-wide">
                        Hamburgusa beacon
                      </h1>
                    </div>
                    <div>
                      <button className="bg-gray-200 rounded-full  p-3"></button>
                    </div>
                  </div>

                  <div className="flex justify-between w-full items-center mt-3">
                    <div className="flex gap-2 items-center">
                      <button className="  bg-bgBoton rounded-full p-[3px] shadow-md active:bg-green-500 transition-all duration-200">
                        <GoPlus size={18} />
                      </button>
                      <button className="  bg-bgBoton rounded-full p-[3px] shadow-md active:bg-green-500 transition-all duration-200">
                        <GoPlus size={18} />
                      </button>
                    </div>
                    <p className="font-bold text-[14px]">19.299</p>
                  </div>
                </div>
                <div className="border-gray-200 border-[1px] p-3 mt-3 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img src={hamburguesa} className="w-8" alt="" />
                      <h1 className="text-[14px] font-bold tracking-wide">
                        Hamburgusa beacon
                      </h1>
                    </div>
                    <div>
                      <button className="bg-gray-200 rounded-full  p-3"></button>
                    </div>
                  </div>

                  <div className="flex justify-between w-full items-center mt-3">
                    <div className="flex gap-2 items-center">
                      <button className="  bg-bgBoton rounded-full p-[3px] shadow-md active:bg-green-500 transition-all duration-200">
                        <GoPlus size={18} />
                      </button>
                      <button className="  bg-bgBoton rounded-full p-[3px] shadow-md active:bg-green-500 transition-all duration-200">
                        <GoPlus size={18} />
                      </button>
                    </div>
                    <p className="font-bold text-[14px]">19.299</p>
                  </div>
                </div>

                <div className="p-3 mt-[100px] rounded-2xl">
                  <div className="">
                    <div className="flex justify-between">
                      <p className="text-[16px]">Subtotal</p>
                      <span className="font-bold text-[14px]">110$</span>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[16px]">Iva 16%</p>
                      <span className="font-bold text-[14px]">12</span>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[16px]">Total</p>
                      <span className="font-bold text-[14px]">185$</span>
                    </div>

                    <button className="font-bold bg-bgBoton py-3 w-full rounded-full mt-3 shadow-md active:bg-green-500 transition-all duration-200">Confirmar orden</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
