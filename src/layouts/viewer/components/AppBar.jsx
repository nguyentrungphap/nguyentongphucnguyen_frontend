import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import currency from "currency.js";

export default function AppBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.count,
    0
  );
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.count * item.attributes.price,
    0
  );

  return (
    <>
      <div className="topNav">
        <div className="container">
          <div className="alignR">
            <div className="pull-left socialNw">
              <a href="#sư">
                <span className="icon-twitter" />
              </a>
              <a href="#sư">
                <span className="icon-facebook" />
              </a>
              <a href="#sư">
                <span className="icon-youtube" />
              </a>
              <a href="#sư">
                <span className="icon-tumblr" />
              </a>
            </div>
            <a href="index.html">
              <span className="icon-home" /> Home
            </a>
            <a href="#sư">
              <span className="icon-user" /> My Account
            </a>
            <a href="register.html">
              <span className="icon-edit" /> Free Register
            </a>
            <a href="contact.html">
              <span className="icon-envelope" /> Contact us
            </a>
            <Link to="/cart">
              <span className="icon-shopping-cart" /> {totalItems} Item(s) -
              <span className="badge badge-warning">
                {" "}
                [
                {currency(totalPrice, {
                  symbol: "đ",
                  separator: ".",
                  decimal: ",",
                }).format()}
                ]
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
