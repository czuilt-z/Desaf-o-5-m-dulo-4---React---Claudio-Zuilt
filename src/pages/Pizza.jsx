import napolitana from "../assets/img/napolitana.jpg";
import española from "../assets/img/española.jpg";
import pepperoni from "../assets/img/pepperoni.jpg";
import cuatroEstaciones from "../assets/img/cuatro-estaciones.jpg";
import bacon from "../assets/img/bacon.jpg";
import polloPicante from "../assets/img/pollo-picante.jpg";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Pizza() {

  const [pizza, setPizza] = useState(null);

  // Objeto que relaciona IDs con imágenes
  const pizzaImages = {
    p001: napolitana,
    p002: española,
    p003: pepperoni,
    p004: cuatroEstaciones,
    p005: bacon,
    p006: polloPicante,
  };

  useEffect(() => {

    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.log(error));

  }, []);

  // Mientras carga la API
  if (!pizza) {
    return (
      <>
        <h1>Aquí van las Pizzas que carga el local host 5000</h1>
        <p>Cargando pizza...</p>;
      </>
    )
  }

  return (


    <div className="d-flex justify-content-center">

      <Card className="pizza-card" style={{ width: "25rem" }}>

        <Card.Img
          variant="top"
          src={pizzaImages[pizza.id]}
        />

        <Card.Body>

          <Card.Title>
            Pizza {pizza.name}
          </Card.Title>

          <hr />

          <Card.Text>
            {pizza.desc}
          </Card.Text>

          <p className="text-center">
            <strong>Ingredientes:</strong>
          </p>

          <ul className="ingredients">

            {pizza.ingredients.map((ingredient, index) => (

              <li key={index}>
                🍕 {ingredient}
              </li>

            ))}

          </ul>

          <hr />

          <p className="price">
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </p>

          <div className="buttons">

            <Button
              variant="outline-dark"
              size="sm"
            >
              Ver Más 👀
            </Button>

            <Button
              variant="dark"
              size="sm"
            >
              Añadir 🛒
            </Button>

          </div>

        </Card.Body>

      </Card>

    </div>


  );
}

export default Pizza;