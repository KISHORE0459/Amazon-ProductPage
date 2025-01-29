import PropTypes from "prop-types";
import "../style/nav.css";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Amazonlogo from "../assets/amazonlogo.png";
import { useState } from "react";

const Nav = () => {
  const [showlanguage, setshowlanguage] = useState(false);
  return (
    <div className="nav-container">
      <nav className="nav">
        <div>
          {" "}
          <img src={Amazonlogo} alt="" className="nav__logo" />
        </div>

        <div className="nav__location">
          <CiLocationOn className="nav__locationlogo" />
          <div>
            <h6 className="nav__locationarea">Delivery to Villupuram</h6>
            <h4>Update Location</h4>
          </div>
        </div>
        <div className="nav__search">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="nav__search__input"
          />
          <div className="nav__search__btn">
            <IoSearch className="nav__search__btn__logo" />
          </div>
        </div>
        <div className="nav__items">
          <div
            className="nav__language"
            onMouseOver={() => {
              setshowlanguage(true);
            }}
            onMouseLeave={() => {
              setshowlanguage(false);
            }}
          >
            <img
              src="https://w7.pngwing.com/pngs/138/167/png-transparent-india-flag-indian-flag-national-symbol-india-flag-country-banner-symbolism-saffron.png"
              alt=""
              className="countryimg"
            />
            <h3 className="nav__language__country" id="locationcode">
              EN
            </h3>
            <IoMdArrowDropdown />
            {showlanguage && (
              <ShowLanguage
                style={{
                  left: document.getElementById("locationcode").offsetWidth,
                }}
              />
            )}
          </div>
          <div className="userlogin">
            <h4 className="nav__userlogin">Hello, Kishore</h4>
            <div className="nav__accounts">
              <h3>Account & Lists</h3>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="nav__return">
            <h4>Returns</h4>
            <h3>& Order</h3>
          </div>
          <div className="nav__cart" to="/cart">
            <FiShoppingCart className="cartlogo" />
            <h2 id="cartitems">2</h2>
          </div>
        </div>
      </nav>
      <nav className="mobilenav">
        <div>
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERQZ_OMmTpmceWkD12o5V2QxLAW_nW0omBw&s"
            alt=""
            className="nav__logo__mobile"
          />
        </div>
        <div className="nav__search">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="nav__search__input"
          />
          <div className="nav__search__btn">
            <IoSearch className="nav__search__btn__logo" />
          </div>
        </div>
      </nav>
    </div>
  );
};
Nav.propTypes = {
  user: PropTypes.object,
};

const ShowLanguage = () => {
  const languages = ["English", "Tamil", "Hindi"];
  return (
    <div className="selectlanguages">
      <ul className="languagelist">
        {languages.map((ln) => (
          <li key={ln} className="languages">
            <input type="radio" value={ln} onClick={() => {}} />
            <h4>{ln}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
