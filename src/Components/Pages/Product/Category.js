import React from "react";
import "./Category.css";

function Category({ category, filterProduct }) {
  return (
    <div className="mt-5">
      <button className="filter-btn" onClick={() => filterProduct(category)}>
        {category}
      </button>
    </div>
  );
}

export default Category;
