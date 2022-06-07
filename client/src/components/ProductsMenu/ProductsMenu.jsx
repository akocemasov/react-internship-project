import ProductHeader from "../ProductHeader/ProductHeader";
import ProductSlider from "../ProductSlider/ProductSlider";
import Product from "../Product/Product";

import getData from "../../fetchJsonApi";
import { jsonServerUrl } from "../../globals/globals";

import React, { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import routes from "../../routes/routes";

export const ProductsMenu = (props) => {
  const [productData, setProductData] = useState({});
  const [isFetchedProductData, setIsFetchedProductData] = useState(false);
  useEffect(
    () =>
      getData(
        "productData",
        jsonServerUrl,
        setProductData,
        setIsFetchedProductData
      ),
    []
  );

  const productsKeys = isFetchedProductData && Object.keys(productData);
  return (
    isFetchedProductData &&
    productsKeys.map((product) => (
      <div
        key={productData[product].id}
        className="product bg-[#1b1a1b] first-of-type:pt-40"
      >
        <Product product={productData[product]} />
      </div>
    ))
  );
};

export default ProductsMenu;
