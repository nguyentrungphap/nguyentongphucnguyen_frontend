import React from "react";

const Filter = (props) => {
  const { handleFilterByName, handleFilterByMaxPrice, handleFilterByMinPrice } =
    props;
  return (
    <div className="well well-small">
      <input type="text" placeholder="name" onChange={handleFilterByName} />
      <input
        type="text"
        placeholder="Max price"
        onChange={handleFilterByMaxPrice}
      />
      <input
        type="text"
        placeholder="Min price"
        onChange={handleFilterByMinPrice}
      />
    </div>
  );
};

export default Filter;
