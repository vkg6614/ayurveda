import React from "react";
import "./Navbar.css";
import arshlogo from "../../images/ARSH-logo.jpg";
import avatar from "../../images/avatar.png";
import cart from "../../images/cart.png";
import favourite from "../../images/favourite.png";
import notification from "../../images/notification.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={arshlogo} alt="logo-arsh" />
      <div className="nav-Link">
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>
        <p>Export</p>
        <p>Blogs</p>
        <p>Contact</p>
      </div>
      <div className="profile-details">
        <img src={favourite} alt="favourite" />
        <img src={notification} alt="notification" />
        <img src={cart} alt="cart" />
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
