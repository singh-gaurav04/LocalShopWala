import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ productList }) => {
  return (
    <div className='mt-5'>
      <h2 className='font-bold text-green-600 capitalize text-xl'>
        Our popular products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5">
        {productList.map((product, index) => (
          <ProductItem key='index' product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
