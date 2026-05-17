import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const aumentarCantidad = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <div className="Cart-container">
      <h2>Carrito de compras</h2>

      {cart.map((pizza) => (
  <div key={pizza.id} className="cart-item">
    
    <div className="cart-info">
      <img src={pizza.img} alt={pizza.name} />
      
      <div className="cart-text">
        <h4>{pizza.name}</h4>
        <p>${pizza.price.toLocaleString("es-CL")}</p>
      </div>
    </div>

    <div className="cart-controls">
      <button onClick={() => disminuirCantidad(pizza.id)}>-</button>
      <span>{pizza.count}</span>
      <button onClick={() => aumentarCantidad(pizza.id)}>+</button>
    </div>

  </div>
))}

      <hr />

      <h3>Total: ${total.toLocaleString("es-CL")}</h3>

      <button>Pagar</button>
    </div>
  );
}

export default Cart;