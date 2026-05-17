import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <Card className="pizza-card">
      <Card.Img variant="top" src={img} />

      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>

        <hr />

        <p className="text-center">
          <strong>Ingredientes:</strong>
        </p>

        <ul className="ingredients">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />

        <p className="price">
          Precio: ${price.toLocaleString("es-CL")}
        </p>

        <div className="buttons">
          <Button variant="outline-dark" size="sm">
            Ver Más 👀
          </Button>

          <Button variant="dark" size="sm">
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;