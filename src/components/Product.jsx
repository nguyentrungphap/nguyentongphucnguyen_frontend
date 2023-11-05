import React from "react";
import AppUrl from "../Api/AppUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/modules/carts/cart-slice";

export default function Product(props) {
  const { product } = props;
  const dispath = useDispatch();
  return (
    <div className="thumbnail" style={{ height: "340px" }}>
      <Link to={"/product/" + product.id}>
        <img
          src={
            AppUrl.ImageUrl + product.attributes.image.data[0].attributes.url
          }
          alt="#sư"
        />
      </Link>
      <div className="caption cntr">
        <Link to={"/product/" + product.id}>
          <p>{product.attributes.productName}</p>
        </Link>
        <p>
          <strong> {product.attributes.price}đ</strong>
        </p>
        <h4>
          <Link
            className="shopBtn"
            to="#sư"
            title="add to cart"
            onClick={() =>
              dispath(addToCart({ item: { ...product, count: 1 } }))
            }
          >
            Add to cart
          </Link>
        </h4>
        <div className="actionList">
          <a className="pull-left" href="#sư">
            Add to Wish List
          </a>
          <a className="pull-left" href="#sư">
            Add to Compare
          </a>
        </div>
        <br className="clr" />
      </div>
    </div>
  );
}
