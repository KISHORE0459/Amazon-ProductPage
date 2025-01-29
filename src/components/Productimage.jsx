import "../style/productimage.css";
import mimg1 from "../assets/mobileimage1.jpg";
import mimg2 from "../assets/mobileimage2.jpg";
import mimg3 from "../assets/mobileimage3.jpg";
import mimg4 from "../assets/mobileimage4.jpg";
import mimg5 from "../assets/mobileimage5.jpg";
import { FiShare } from "react-icons/fi";
import { useState } from "react";

const Productimage = () => {
  const [image, setImage] = useState(mimg1);
  return (
    <div id="prod-image-ctn">
      <div id="image-sample">
        <img
          src={mimg1}
          alt="image1"
          onMouseOver={() => {
            setImage(mimg1);
          }}
        />
        <img
          src={mimg2}
          alt="image2"
          onMouseOver={() => {
            setImage(mimg2);
          }}
        />
        <img
          src={mimg3}
          alt="image3"
          onMouseOver={() => {
            setImage(mimg3);
          }}
        />
        <img
          src={mimg4}
          alt="image4"
          onMouseOver={() => {
            setImage(mimg4);
          }}
        />
        <img
          src={mimg5}
          alt="image5"
          onMouseOver={() => {
            setImage(mimg5);
          }}
        />
      </div>
      <div id="prod-image">
        <div id="share-img-ctn">
          <FiShare id="share-img" />
        </div>
        <img src={image} alt="Mobile Image" />
      </div>
    </div>
  );
};

export default Productimage;
