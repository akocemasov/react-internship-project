import {
  /*Link,*/ useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { /*useState,*/ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { deleteCart } from "../../redux/Cart/actions/deleteCart.action";

import i18n from "../../i18n/i18n";
import addLangToPath from "../../utils/addLangToPath";

export const CartPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUrl = useLocation().pathname;
  const locales = i18n.languages;

  let { locale } = useParams();

  const selectCart = (state) => state.cart;
  const cart = useSelector(selectCart);

  const selectLogin = (state) => state.login;
  const login = useSelector(selectLogin);

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      let newUrl = addLangToPath(currentUrl.substring(4));
      navigate(newUrl);
      return;
    });
  }, [locale, currentUrl, locales, navigate]);

  const handleClickOrder = () => {
    if (login.exist) {
      dispatch(
        deleteCart({
          userId: JSON.parse(localStorage.getItem("userId")),
        })
      );
    }
  };

  return (
    <div className="cart-page w-screen h-screen bg-[#1b1a1b]">
      <div className="cart-container flex ml-[25%] mt-[10%] w-[50%] h-[70%] overflow-y-scroll border border-white p-2 rounded-md">
        <div className="cart-products flex flex-col w-[70%] p-2">
          <div className="text-3xl font-bold text-white p-4">
            {t("Items in your cart")}
          </div>
          <ul className="flex flex-col text-white p-2">
            {cart.ready &&
              cart.payload.message.map((elem) => (
                <li
                  key={elem._id}
                  className="flex justify-between items-center p-2"
                >
                  <img
                    src={elem.src}
                    className="h-[140px]"
                    alt={elem.title}
                  ></img>
                  <span className="">{t(elem.title)}</span>
                  <span className="">
                    {elem.price} {t(elem.currency)}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="cart-order flex flex-col w-[30%] h-full p-2">
          <div className="flex justify-between px-4 py-3 text-neutral-800 bg-white rounded text-sm">
            <div>{t("Total")}</div>
            <div>
              {cart.ready ? cart.payload.message.reduce((a, b) => a + b.price, 0) + " " + t("mdl") : 0 + " " + t("mdl")}
            </div>
          </div>
          <button
            className="mt-[5%] px-6 py-3 border border-neutral-600 text-white text-sm font-medium bg-black hover:bg-neutral-800 uppercase rounded"
            onClick={handleClickOrder}
          >
            {t("Order")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
