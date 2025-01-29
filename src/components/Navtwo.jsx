import { IoMenuSharp } from "react-icons/io5";
import addimg from "../assets/addimg.png";
import "../style/navtwo.css";
const Navtwo = () => {
  return (
    <nav id="secondnav">
      <div id="menubar">
        <IoMenuSharp />
        <h3>All</h3>
      </div>
      <div id="mxplayer">
        <h3>MX Player</h3>
      </div>
      <div id="sell">
        <h3>Sell</h3>
      </div>
      <div id="deal">
        <h3>Todays Deal</h3>
      </div>
      <div id="amazon-pay">
        <h3>Amazon Pay</h3>
      </div>
      <div id="keepfor">
        <h3>Keep Shopping For</h3>
      </div>
      <div id="bestseller">
        <h3>Best Seller</h3>
      </div>
      <div id="buyagain">
        <h3>Buy Again</h3>
      </div>
      <div id="prime">
        <h3>Prime</h3>
      </div>
      <div id="mobile">
        <h3>Mobiles</h3>
      </div>
      <div id="customerservice">
        <h3>Customer Service</h3>
      </div>
      <div id="add">
        <img src={addimg} alt="" />
      </div>
    </nav>
  );
};

export default Navtwo;
