import "./App.css";
import Nav from "./components/Nav";
import Navtwo from "./components/Navtwo";
import Productimage from "./components/Productimage";
import Productdetails from "./components/Productdetails";
import Productorder from "./components/Productorder";
import Cartside from "./components/Cartside";
import Navbottom from "./components/Navbottom";

const App = () => {
  return (
    <div id="container">
      <div id="navs">
        <Nav />
        <Navtwo />
      </div>
      <div id="product">
        <div id="product-image">
          <Productimage />
        </div>
        <Productdetails />
        <Productorder />
      </div>
      <Cartside />
      <Navbottom />
    </div>
  );
};

export default App;
