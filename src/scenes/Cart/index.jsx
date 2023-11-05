import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import currency from "currency.js";
import AppUrl from "../../Api/AppUrl";
import {
  removeCartItem,
  decreaseQuantity,
  increaseQuantity,
} from "../../store/modules/carts/cart-slice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items) || [];
  const dispath = useDispatch();

  const totalItems = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.count,
    0
  );
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.count * item.attributes.price,
    0
  );

  const contentCart = cartItems.map((item) => (
    <tr>
      <td>
        <img
          width={100}
          src={AppUrl.ImageUrl + item.attributes.image.data[0].attributes.url}
          alt="#su"
        />
      </td>
      <td> {item.attributes.productName}</td> <td> - </td>
      <td>
        <span className="shopBtn">
          <span className="icon-ok" />
        </span>
      </td>
      <td>
        {currency(item.attributes.price, {
          symbol: "đ",
          separator: ".",
          decimal: ",",
        }).format()}
      </td>
      <td>
        <input
          className="span1"
          style={{ maxWidth: 34 }}
          placeholder={1}
          id="appendedInputButtons"
          size={16}
          type="text"
          Value={item.count}
        />
        <div className="input-append">
          <button
            className="btn btn-mini"
            type="button"
            onClick={() => dispath(decreaseQuantity({ id: item.id }))}
          >
            -
          </button>
          <button
            className="btn btn-mini"
            type="button"
            onClick={() => dispath(increaseQuantity({ id: item.id }))}
          >
            +
          </button>
          <button
            className="btn btn-mini btn-danger"
            type="button"
            onClick={() => dispath(removeCartItem({ id: item.id }))}
          >
            <span className="icon-remove" />
          </button>
        </div>
      </td>
      <td>
        {currency(item.attributes.price * item.count, {
          symbol: "đ",
          separator: ".",
          decimal: ",",
        }).format()}
      </td>
    </tr>
  ));
  return (
    <div className="well well-small">
      <h1>
        Check Out
        <small className="pull-right"> 2 Items are in the cart </small>
      </h1>
      <hr className="soften" />
      <table className="table table-bordered table-condensed">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th> Ref. </th>
            <th>Avail.</th>
            <th>Unit price</th>
            <th>qtt </th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {contentCart}
          <tr>
            <td colSpan={6} className="alignR">
              Total products:{totalItems}
            </td>
            <td className="label label-primary">
              {currency(totalPrice, {
                symbol: "đ",
                separator: ".",
                decimal: ",",
              }).format()}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <a href="products.html" className="shopBtn btn-large">
        <span className="icon-arrow-left" /> Continue Shopping
      </a>
      <a href="login.html" className="shopBtn btn-large pull-right">
        Next <span className="icon-arrow-right" />
      </a>
    </div>
  );
}
