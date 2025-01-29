import PropTypes from "prop-types";
import "../style/cartside.css";
import { MdOutlineDelete } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Cartproduct = ({ product }) => {
  return (
    <div className="cart-product-ctn">
      <img src={product.image} alt="" className="cart-product-img" />
      <h3 className="cart-product-price">
        <LiaRupeeSignSolid className="rupeesign" />
        {product.price}
      </h3>
      <div className="product-quantity">
        <select name="" id="">
          <option value="1">Quantity : 1</option>
          <option value="2">Quantity : 2</option>
          <option value="3">Quantity : 3</option>
          <option value="4">Quantity : 4</option>
          <option value="5">Quantity : 5</option>
          <option value="6">Quantity : 6</option>
        </select>
      </div>
      <div className="product-delete">
        <MdOutlineDelete className="delete-logo" />
      </div>
    </div>
  );
};

Cartproduct.propTypes = {
  product: PropTypes.object.isRequired,
};
export default Cartproduct;
