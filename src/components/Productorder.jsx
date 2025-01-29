import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import amazonfullfilled from "../assets/amazonfullfilled.png";
import "../style/productorder.css";
const Productorder = () => {
  return (
    <div id="productorder">
      <div id="price">
        <LiaRupeeSignSolid id="rupeesign" />
        <h3>20,458</h3>
        <h4>00</h4>
      </div>
      <div id="amazonfulfilled">
        <img src={amazonfullfilled} alt="" />
      </div>
      <div id="delivery-details">
        <a href="">FREE Delivery</a> <b> Wednesday,</b> <b>5 February.</b>
        <h3>Order within</h3> <h3 className="time">12 hrs</h3>
        <h3 className="time">36 mins.</h3> <a href="">Details</a>
      </div>
      <div id="delivery-location">
        <CiLocationOn id="location" />
        <h3>Delivery to kishore - viluppuram 605302</h3>
      </div>
      <div id="instock">In stock</div>
      <div id="payment-details">
        <div id="payment">
          <h3>Payment</h3>
          <h4 className="payment-highlight">secure transcation</h4>
        </div>
        <div id="shipping">
          <h3>Ships from</h3>
          <h4>Amazon</h4>
        </div>
        <div id="sold">
          <h3>Sold by</h3>
          <h4 className="payment-highlight">Darshita Etel</h4>
        </div>
      </div>
      <div id="protection-plan">
        <h3>Add a Protection Plan:</h3>
        <div id="plan1" className="plan">
          <input type="checkbox" />
          <div id="plan1-ctn">
            <h3>
              <b>Total Protection Plan</b> for
            </h3>
            <h3 className="price">
              <LiaRupeeSignSolid />
              1,499.00
            </h3>
          </div>
        </div>
        <div id="plan2" className="plan">
          <input type="checkbox" />
          <div id="plan2-ctn">
            <h3>
              <b>Extended Warenty</b> for
            </h3>
            <h3 className="price">
              <LiaRupeeSignSolid />
              849.00
            </h3>
          </div>
        </div>
      </div>
      <div id="order-btns">
        <button id="addtocart">Add to Cart</button>
        <button id="buynow">Buy Now</button>
      </div>
      <div id="gift">
        <input type="checkbox" />
        <h3>Add gift options</h3>
      </div>
      <div id="wishlist">
        <button id="addtowishlist">Add to Wish List</button>
      </div>
    </div>
  );
};

export default Productorder;
