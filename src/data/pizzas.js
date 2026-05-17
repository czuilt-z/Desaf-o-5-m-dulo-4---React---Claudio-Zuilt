import napolitana from "../assets/img/napolitana.jpg";
import española from "../assets/img/española.jpg";
import pepperoni from "../assets/img/pepperoni.jpg";
import cuatroEstaciones from "../assets/img/cuatro-estaciones.jpg";
import bacon from "../assets/img/bacon.jpg";
import polloPicante from "../assets/img/pollo-picante.jpg";



export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "P001",
    img: napolitana,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P002",
    img: española,
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P003",
    img: pepperoni,
    ingredients: ["mozzarella", "tomates", "pepperoni", "orégano"],
    name: "pepperoni",
    price: 5990,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P004",
    img: cuatroEstaciones,
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P005",
    img: bacon,
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P006",
    img: polloPicante,
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
];

// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: napolitana,
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: española,
  },
  {
    id: "P003",
    name: "pepperoni",
    price: 5990,
    count: 1,
    img: pepperoni,
  },
];
