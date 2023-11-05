import React, { useEffect, useState } from "react";
import PictureBox from "./coomponents/PictureBox";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import productApi from "../../Api/productApi";
import currency from "currency.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/carts/cart-slice";

export default function ProductDetail() {
  var { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const dispath = useDispatch();
  const params = {
    populate: "*",
  };

  const imgagebox = loading ? (
    <Loading />
  ) : (
    <PictureBox images={product.attributes.image.data} />
  );
  const view2 = loading ? (
    <Loading />
  ) : (
    <>
      {" "}
      <h3>{product.attributes.productName}</h3>
      <hr className="soft" />
      <form className="form-horizontal qtyFrm">
        <div className="control-group">
          <label className="control-label">
            <span>
              {currency(product.attributes.price, {
                symbol: "đ",
                separator: ".",
                decimal: ",",
              }).format()}
            </span>
          </label>
          <div className="controls">
            <input type="number" className="span6" placeholder="Qty." />
          </div>
        </div>
        <p>
          <button
            type="submit"
            className="shopBtn"
            onClick={() =>
              dispath(addToCart({ item: { ...product, count: 1 } }))
            }
          >
            <span className=" icon-shopping-cart" /> Add to cart
          </button>
        </p>
      </form>
    </>
  );
  const view3 = loading ? <Loading /> : <p>{product.attributes.description}</p>;

  useEffect(() => {
    const featchData = async () => {
      Promise.all([productApi.get(id, params)]).then(([response]) => {
        console.log(response);
        setProduct(response.data.data);
        setLoading(false);
      });
    };
    featchData();
  }, []);
  return (
    <div className="well well-small">
      <div className="row-fluid">
        <div className="span5">{imgagebox}</div>
        <div className="span7">{view2}</div>
      </div>
      <hr className="softn clr" />
      <ul id="productDetail" className="nav nav-tabs">
        <li className="active">
          <a href="#home" data-toggle="tab">
            Product Details
          </a>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content tabWrapper">
        <div className="tab-pane active" id="home">
          <h4>Product Information</h4>
          {view3}
        </div>
      </div>
    </div>
  );
}
