import React from "react";
import "./Home.css";
import header_img from "../../images/rectangle.png";
import ProductLists from "../../components/ProductLists/ProductLists";
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <img src={header_img} alt="header-img" />
        <h1>MAKE SPACE FOR</h1>
        <h1>nature</h1>
      </div>
      <ProductLists />
      <div className="pagination">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Home;
