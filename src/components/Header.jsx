import HeaderImg from "../assets/img/Header.jpg";

function Header() {
  return (
    <header
      className="HeaderContent"
      style={{
        backgroundImage: `url(${HeaderImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>¡Pizzería - Mamma Mia</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
}

export default Header;