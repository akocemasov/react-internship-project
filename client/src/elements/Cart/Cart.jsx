import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import addLangToPath from "../../utils/addLangToPath";

import { toCart } from "../../redux/Cart/actions/toCart.action";
import { clearCart } from "../../redux/Cart/actions/clearCart.action";

import Dropdown from "../Dropdown/Dropdown";

export const Cart = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { className } = props;

  const selectCart = (state) => state.cart;
  const cart = useSelector(selectCart);

  const selectLogin = (state) => state.login;
  const login = useSelector(selectLogin);

  // useEffect(() => {
  //   console.log("cart.products=", cart.products)
  // }, [cart.products]);

  useEffect(() => {
    if (login.exist) {
      dispatch(
        toCart({
          userId: JSON.parse(localStorage.getItem("userId")),
          products: [],
        })
      );
    } else {
      dispatch(clearCart());
    }
  }, [login]);

  return (
    <div className={className}>
      <Dropdown
        classNameHeader="dropdown-cart flex pb-2 hover:text-[#ffd905]"
        header={
          <Link className="" to={addLangToPath("cart")}>
            <span className="flex">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span className="cart-count bg-red-600 w-[1.5rem] h-[1.5rem] text-center rounded-full -translate-x-[0.5rem] -translate-y-[0.5rem]">
                {cart.ready ? cart.payload.message.length : 0}
              </span>
            </span>
          </Link>
        }
        classNameList="absolute text-white text-lg font-semibold"
        list={
          cart.ready && cart.payload.message.length > 0
            ? cart.payload.message.map((elem) => (
                <li
                  key={elem._id}
                  className="flex justify-between items-center space-x-4 bg-[#1b1a1b] p-2"
                >
                  <span className="font-light">{t(elem.title)}</span>
                  <span className="">
                    {elem.price} {t(elem.currency)}
                  </span>
                </li>
              ))
            : [
                <span className="block bg-[#1b1a1b] py-1 px-5">
                  {t("Your cart is empty")}
                </span>,
              ]
        }
      />
    </div>
  );
};

export default Cart;
