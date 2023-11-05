import React from "react";
import { Link } from "react-router-dom";

export default function CategoryMenu(props) {
  // xài const {categories} = props
  const { categories, handleFilterByCategory } = props;

  var myView = categories.map((category) => (
    <li key={category.id}>
      <Link to="/products" onClick={handleFilterByCategory}>
        {category.attributes.categoryName}
      </Link>
    </li>
  ));
  return (
    <div className="well well-small">
      <nav className="megamenu">
        <ul className="nav nav-list">{myView}</ul>
      </nav>
    </div>
  );
}
