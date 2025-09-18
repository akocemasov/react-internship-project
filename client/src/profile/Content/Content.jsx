import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import i18n from "../../i18n/i18n";
import addLangToPath from "../../utils/addLangToPath";

import { getProducts } from "../../redux/getServerData/actions/getProducts.action";

import Product from "../../components/Product/Product";

export const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUrl = useLocation().pathname;
  const locales = i18n.languages;

  let { locale, productPath, productItemPath } = useParams();

  const productsTopPad = currentUrl.includes("products") ? 40 : 0;

  useEffect(() => {
    if (locale && locales.includes(locale)) {
    } else {
      let newUrl = addLangToPath(currentUrl.substring(1));
      navigate(newUrl);
      return;
    }

    i18n.on("languageChanged", (lng) => {
      let newUrl = addLangToPath(currentUrl.substring(4));
      navigate(newUrl);
      return;
    });
  }, [locale, currentUrl, locales, navigate]);

  const selectProducts = (state) => state.products;
  const products = useSelector(selectProducts);

  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (products && products.ready) {
      setCurrentProduct(
        products.payload.filter((product) => product.title === productPath)
      );
    }
  }, [productPath, products, products.ready]);

  return (
    <div className="content bg-[#1b1a1b]">
      {currentProduct && productPath ? (
        <div className="product bg-[#1b1a1b] first-of-type:pt-40">
          <Product id={productPath} product={currentProduct[0]} />
        </div>
      ) : (
        products &&
        products.ready &&
        products.payload.map((product) => (
          <div
            key={product._id}
            className={`product bg-[#1b1a1b] first-of-type:pt-${productsTopPad}`}
          >
            <Product id={productPath} product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
