import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonProduct = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className="container">
      <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-product">
          <SkeletonElement type="thumbnail" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <div className="d-flex justify-content-center">
            <SkeletonElement type="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
