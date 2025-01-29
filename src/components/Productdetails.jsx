import "../style/productdetail.css";
import { MdStar } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineSafety } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { GiCash } from "react-icons/gi";
import amazonfullfilled from "../assets/amazonfullfilled.png";
import offerimg from "../assets/Offerimage.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Productspecs from "./Productspecs";

const Productdetails = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="product-detail">
      <div id="prod-name-review">
        <h2 id="prod-name">
          iQOO Z9 5G (Graphene Blue, 8GB RAM, 256GB Storage) | Dimensity 7200 5G
          Processor | Sony IMX882 OIS Camera | 120Hz AMOLED with 1800 nits Local
          Peak Brightness | 44W Charger in The Box
        </h2>
        <h4 id="visitstore">Visit the iQOO Store</h4>
        <div id="ratings-ctn">
          <div id="ratings">
            <div id="rating-num">4.2</div>
            <div id="rating-star">
              {Array(5)
                .fill()
                .map((i) => {
                  return <MdStar key={i} />;
                })}
              <FaChevronDown id="star-dropdown" />
            </div>
          </div>
          <div id="rating-detail">
            <h4 id="review-count">5,908 ratings </h4>
            <h4>Search this page</h4>
          </div>
        </div>
        <h4 id="purchase-detail">
          <b>1K+ bought</b> in past month
        </h4>
      </div>
      <div id="product-price-deal">
        <h4 id="limited-deal">Limited time deal</h4>
        <div id="prod-price-ctn">
          <h3 id="offer">- 24%</h3>
          <div id="price">
            <LiaRupeeSignSolid className="rupeesign" />
            <h3>20,498</h3>
          </div>
        </div>
        <div id="mrp">
          <h4>M.R.P : </h4>
          <strike>
            <LiaRupeeSignSolid className="rupeesign" />
            26,999
          </strike>
        </div>
        <img src={amazonfullfilled} alt="" id="amazonfulfilled-img" />
        <h4 id="tax">Inclusive of all taxes</h4>
        <div id="emi">
          <h4>
            <b>EMI</b> starts at ₹994. No Cost EMI available
          </h4>
          <h4 id="emioptions">
            EMI options
            <FaChevronDown id="dropdown" />
          </h4>
        </div>
      </div>
      <div id="product-offer">
        <h4 id="offers-text">
          <img src={offerimg} alt="offer-image" id="offer-logo" />
          Offers
        </h4>
        <Slider id="offers" {...settings}>
          <div className="offer-ctn">
            <h3>Bank Offer</h3>
            <h5>Upto ₹3,000.00 discount on select Credit Cards, select...</h5>
            <a href="">
              8 Offer
              <MdKeyboardArrowRight />
            </a>
          </div>
          <div className="offer-ctn">
            <h3>No Cost EMI</h3>
            <h5>Upto ₹3,000.00 discount on select Credit Cards, select...</h5>
            <a href="">
              8 Offer
              <MdKeyboardArrowRight />
            </a>
          </div>
          <div className="offer-ctn">
            <h3>Cashback</h3>
            <h5>Upto ₹3,000.00 discount on select Credit Cards, select...</h5>
            <a href="">
              8 Offer
              <MdKeyboardArrowRight />
            </a>
          </div>
          <div className="offer-ctn">
            <h3>Partner Offer</h3>
            <h5>Upto ₹3,000.00 discount on select Credit Cards, select...</h5>
            <a href="">
              8 Offer
              <MdKeyboardArrowRight />
            </a>
          </div>
        </Slider>
      </div>
      <div id="addons-ctn">
        <Slider className="addons" {...settings}>
          <div className="slidediv">
            <div className="slide-image-ctn">
              <GrServices className="slide-image" />
            </div>
            <h4>7 days Service Centre Replacement</h4>
          </div>
          <div className="slidediv">
            <div className="slide-image-ctn">
              <CiDeliveryTruck className="slide-image" />
            </div>
            <h4>Free Delivery</h4>
          </div>
          <div className="slidediv">
            <div className="slide-image-ctn">
              <AiOutlineSafety className="slide-image" />
            </div>
            <h4>1 Year Warranty</h4>
          </div>
          <div className="slidediv">
            <div className="slide-image-ctn">
              <GiCash className="slide-image" />
            </div>
            <h4>Cash/Pay on Delivery</h4>
          </div>
          <div className="slidediv">
            <div className="slide-image-ctn">
              <TfiCup className="slide-image" />
            </div>
            <h4>Top Brand</h4>
          </div>
        </Slider>
      </div>
      <Productspecs />
    </div>
  );
};

export default Productdetails;
