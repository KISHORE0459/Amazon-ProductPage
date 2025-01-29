import "../style/cartside.css";
import Cartproduct from "./Cartproduct";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Cartside = () => {
  const cartproducts = [
    {
      image: "https://m.media-amazon.com/images/I/61oIB2v80vL._AC_AA152_.jpg",
      price: "1,399",
    },
    {
      image: "https://m.media-amazon.com/images/I/61kReoWGtHL._AC_AA152_.jpg",
      price: "999",
    },
    {
      image: "https://m.media-amazon.com/images/I/51HhRb8tLUL._AC_AA152_.jpg",
      price: "209",
    },
  ];

  return (
    <div id="cartside">
      <div id="subtotal">
        <h4>Subtotal</h4>
        <h3>
          <LiaRupeeSignSolid />
          2,607.00
        </h3>
      </div>
      <div id="free-delivery">
        <h3>Your Order is Eligible for Free Delivery</h3>
        <h4>Select this option at checkout.</h4>
        <a href="">Details</a>
      </div>
      <div id="gotocart">
        <button id="cart">Go To Cart</button>
      </div>
      <div id="cart-products">
        {cartproducts.map((product) => (
          <Cartproduct product={product} key={product} />
        ))}
      </div>
    </div>
  );
};

export default Cartside;
