import React from "react";
import Product from "./Product";

function ProductBox(props) {
  const { products } = props;
  // Ko dữ dụng var
  const myView = products.map((product) => (
    // ko sử dụng Style
    <li className="span3" style={{ height: "350px", margin: "5px" }}>
      <Product product={product} />
    </li>
  ));

  return (
    <div className="well well-small">
      <h3>Our Products</h3>
      <div className="row-fluid">
        <ul className="thumbnails">{myView}</ul>
      </div>
    </div>
  );
}

ProductBox.defaultProps = {
  products: [],
};

export default ProductBox;
