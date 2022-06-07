import React, { /*useEffect,*/ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { getPortalProduct } from "../../redux/getServerData/actions/getPortalProduct.action";
import { toCart } from "../../redux/Cart/actions/toCart.action";

import addLangToPath from "../../utils/addLangToPath";
import Portal from "../Portal/Portal";
import ButtonNext from "../../elements/ButtonNext/ButtonNext";
import ButtonPrev from "../../elements/ButtonPrev/ButtonPrev";

export const ProductSlider = (props) => {
  const NUM_SLIDES = 5;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { t } = useTranslation();
  const { product } = props;
  const [slideActiveIdx, setActiveIdx] = useState(0);

  const selectPortalProduct = (state) => state.portalProduct;
  const portalProduct = useSelector(selectPortalProduct);

  const slides = product.subMenu;

  const slidesSlice = slides.slice(slideActiveIdx, slideActiveIdx + NUM_SLIDES);

  const slidesActive =
    slidesSlice.length < NUM_SLIDES
      ? [...slidesSlice, ...slides.slice(0, NUM_SLIDES - slidesSlice.length)]
      : slidesSlice;

  const handleOnClick = (event) => {
    let index;
    if (event.target.name === "prev") {
      index = slideActiveIdx === 0 ? slides.length - 1 : slideActiveIdx - 1;
    } else {
      // next
      index = slideActiveIdx === slides.length - 1 ? 0 : slideActiveIdx + 1;
    }
    setActiveIdx(index);
  };

  return (
    <div>
      {portalProduct && portalProduct.open && (
        <Portal>
          <div className="block fixed top-0 left-0 z-50">
            <div className="w-screen h-screen opacity-80 bg-[#1b1a1b]"></div>
            <div className="flex fixed left-[20%] top-[10%] h-[80%] w-[60%] rounded border border-white bg-[#1b1a1b] text-white">
              <div className="modal-image w-[60%] h-[98%] overflow-hidden">
                <img
                  src={portalProduct.payload.src}
                  className="p-3 w-full"
                  alt={portalProduct.payload.title}
                ></img>
              </div>
              <div className="modal-info flex flex-col justify-between w-[40%]">
                <button
                  className="absolute right-0 hover:text-[#ffd905]"
                  onClick={() => {
                    dispatch(getPortalProduct({}, false));
                    navigate(-1);
                  }}
                >
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <div className="modal-title ml-[5%] mt-[5%] font-bold text-4xl">
                  {t(portalProduct.payload.title)}
                </div>
                <div className="modal-about h-[68%] ml-[5%] mt-[5%]">...</div>
                <div className="modal-price flex justify-between w-[90%] ml-[5%] font-semibold text-2xl">
                  <span>{t("Price")}:</span>
                  <span>
                    {portalProduct.payload.price}{" "}
                    {t(portalProduct.payload.currency)}
                  </span>
                </div>
                <button className="ml-[5%] my-[3%] w-[90%] h-[10%] hover:cursor-pointer bg-red-600 font-semibold text-2xl rounded-xl">
                  {t("Order")}
                  <svg
                    className="inline-block w-12 h-8"
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
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}

      <div className="product-slider flex relative justify-between w-full pb-[2rem]">
        <ButtonPrev
          className="ml-[7%] mt-[6%] z-10 cursor-pointer rounded-full w-10 h-24 bg-white/30 hover:bg-white/50"
          onClick={handleOnClick}
          name="prev"
        />

        <div className="flex relative overflow-x-hidden">
          {slidesActive.map((elem) => (
            <div key={elem._id} className={``}>
              <div className="border-[#ffd905] hover:border-[0.1rem] rounded duration-100 ease-in-out">
                <Link to={addLangToPath(`products/${product.title}/${elem.title}`)}>
                  <img
                    src={elem.src}
                    className="p-3 hover:cursor-pointer h-[330px] min-w-[290px]"
                    alt={elem.title}
                    onClick={() => {
                      dispatch(getPortalProduct(elem, true));
                    }}
                  ></img>
                </Link>
                <span className="relative text-white font-medium ml-[5%]">
                  {t(elem.title)}
                </span>
                <button
                  className="to-cart flex justify-between w-[92%] border-[0.1rem] border-[#ffd905] hover:cursor-pointer hover:bg-[#ffd905] text-white hover:text-black m-3 p-2 rounded duration-300 ease-in-out"
                  type="button"
                  onClick={() => {
                    dispatch(toCart({userId: JSON.parse(localStorage.getItem("userId")), products: [elem._id]}));
                  }}
              >
                  <span className="text-sm">
                    {elem.price} {t(elem.currency)}
                  </span>
                  <span className="relative font-semibold">
                    {t("To cart")}
                    <svg
                      className="inline-block w-10 h-6"
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
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <ButtonNext
          className="mr-[7%] mt-[6%] z-10 cursor-pointer rounded-full w-10 h-24 bg-white/30 hover:bg-white/50"
          onClick={handleOnClick}
          name="next"
        />
      </div>
    </div>
  );
};

export default ProductSlider;
