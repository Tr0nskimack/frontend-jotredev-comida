import React from 'react'
import { FilterFood } from '../Components/FilterFood'
import { Card } from '../Components/Card'
import { Cards } from '../Components/Cards'


export const Home = () => {
  const dataImgs = [
    {
      imagen: "/hamburguesa.png",
      descuento:"14%",
      nombre: "Bacon burguer",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto fugiat adipisci veritatis nostrum maiores.",
      precio: 99.99
    },
    {
      imagen: "/pizza.png",
      descuento:"14%",
      nombre: "Pizza",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto fugiat adipisci veritatis nostrum maiores.",
      precio: 20.10
    },
    {
      imagen: "/tostar.png",
      descuento:"14%",
      nombre: "Parrilla",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto fugiat adipisci veritatis nostrum maiores.",
      precio: 12.12
    },
    {
      imagen: "/ensalada-de-frutas.png",
      descuento:"14%",
      nombre: "Ensalada de Frutas",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto fugiat adipisci veritatis nostrum maiores.",
      precio: 14.19
    },
    {
      imagen: "/espaguetis.png",
      descuento:"14%",
      nombre: "Pasta a la carbonara",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto fugiat adipisci veritatis nostrum maiores.",
      precio: 25.20
    },
    {
      imagen: "/sopa.png",
      descuento:"14%",
      nombre: "Sopas, caldos de pollo",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto fugiat adipisci veritatis nostrum maiores.",
      precio: 14.03
    },
    {
      imagen: "/pollo-frito.png",
      descuento:"14%",
      nombre: "Pollo Frito",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto fugiat adipisci veritatis nostrum maiores.",
      precio: 18.20
    },
    {
      imagen: "arroz-con-pollo.png",
      descuento:"14%",
      nombre: "Arroz con pollo",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto fugiat adipisci veritatis nostrum maiores.",
      precio: 10.15
    },
  ]
  return (
    <div className=''>
      <FilterFood/>
      <Cards dataImgs={dataImgs}/>
      







    </div>
  )
}
