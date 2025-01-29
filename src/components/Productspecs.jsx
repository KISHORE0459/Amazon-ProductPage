import "../style/productspecs.css";
import mobileimg1 from "../assets/mobileimage1.jpg";
import mobileimg2 from "../assets/mobilevarient.jpg";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { useState } from "react";
const Productspecs = () => {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [specactive, setSpecactive] = useState(true);
  const [specactive1, setSpecactive1] = useState(false);
  const boxshadow = "0px 0px 1.5px 1.5px rgb(4, 69, 139)";
  const bgcolor = "rgb(223, 244, 252)";

  return (
    <div id="prod-specs">
      <div id="varient-color">
        <h4 id="color">
          color : <b>Brushed Green</b>
        </h4>
        <div
          className="varient"
          style={{ boxShadow: active ? boxshadow : "" }}
          onClick={() => {
            setActive(true);
            setActive1(false);
          }}
        >
          <img src={mobileimg1} alt="" className="prod-var-img" />
          <h5 className="prod-var-price">
            <LiaRupeeSignSolid />
            20,499.00
          </h5>
          <strike className="prod-var-sprice">
            <LiaRupeeSignSolid />
            29,999.00
          </strike>
          <h5 className="delivery">FREE Delivery</h5>
          <h5 className="delivery-date">Wed,5 Feb </h5>
        </div>
        <div
          className="varient"
          style={{ boxShadow: active1 ? boxshadow : "" }}
          onClick={() => {
            setActive(false);
            setActive1(true);
          }}
        >
          <img src={mobileimg2} alt="" className="prod-var-img" />
          <h5 className="prod-var-price">
            <LiaRupeeSignSolid />
            20,499.00
          </h5>
          <strike className="prod-var-sprice">
            <LiaRupeeSignSolid />
            40,999.00
          </strike>
          <h5 className="delivery">FREE Delivery</h5>
          <h5 className="delivery-date">Wed,5 Feb </h5>
        </div>
      </div>
      <div id="size-ctn">
        <h4>
          Size : <b>8GB RAM, 256GB Storage</b>
        </h4>
        <div
          style={{
            boxShadow: specactive ? boxshadow : "",
            backgroundColor: specactive ? bgcolor : "",
          }}
          onClick={() => {
            setSpecactive(true);
            setSpecactive1(false);
          }}
        >
          8GB RAM, 256GB Storage
        </div>
        <div
          style={{
            boxShadow: specactive1 ? boxshadow : "",
            backgroundColor: specactive1 ? bgcolor : "",
          }}
          onClick={() => {
            setSpecactive(false);
            setSpecactive1(true);
          }}
        >
          8GB RAM, 128GB Storage
        </div>
      </div>
      <div id="style-ctn">
        <h4 id="style">
          Style Name : <b>iQOO Z9 5G</b>
        </h4>
        <div className="spectable">
          <b>Brand</b>
          <h4>iQOO</h4>
        </div>
        <div className="spectable">
          <b>Operating System</b>
          <h4>Funtouch OS 14 Based On Android 14</h4>
        </div>
        <div className="spectable">
          <b>RAM Memory Installed Size</b>
          <h4>8 GB</h4>
        </div>
        <div className="spectable">
          <b>CPU Model</b>
          <h4>Others</h4>
        </div>
        <div className="spectable">
          <b>CPU Speed</b>
          <h4>2.8 GHz</h4>
        </div>
      </div>
      <div id="prod-about">
        <h4>About this item</h4>
        <ul>
          <li>
            Fully Loaded Performance - Powered by MediaTek Dimensity 7200 built
            on flagship grade TSMC 2nd Gen 4nm process with a clock speed of
            2.8GHz
          </li>
          <li>
            Fully Loaded Camera - Experience Impressive camera shots with 50 MP
            Sony IMX882 OIS camera, 4K video recording with OIS, Super Night
            Mode, 2x Portrait Zoom, 50 MP UHD Mode
          </li>
          <li>
            Fully Loaded Display - 16.9cm(6.6) 120Hz Full HD+ AMOLED Display
            with 1800 nits local peak brightness, Certified by SGS Eye Care
            Display, DT Star2-Plus Glass protection, HDR playback supported
          </li>
          <li>
            7.83mm Slim Design, Dual Stereo Speakers, IP54 Rated, Extended RAM
            up to 8GB, FunTouch OS 14 Powered by Android 14
          </li>
        </ul>
      </div>
      <div id="seemore">
        <h4>
          <MdKeyboardArrowRight className="rightarrow" />
          See more product details
        </h4>
      </div>
      <div id="report">
        <BiSolidMessageAltDetail id="message-icon" />
        Report an issue with this product
      </div>
    </div>
  );
};

export default Productspecs;
