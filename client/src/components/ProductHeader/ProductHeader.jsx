import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import addLangToPath from "../../utils/addLangToPath";

export const ProductHeader = (props) => {
  const { t } = useTranslation();
  const { product } = props;
  return (
    <div className="product-header mx-[13%] pt-[2rem] pb-[2rem]">
      <div className="flex justify-between w-full border-b-2 py-4 border-neutral-700">
        <span className="text-white text-4xl font-extrabold">{t(product.title)}</span>
        <Link
          className="text-neutral-500 text-sm hover:text-white pt-[1rem] uppercase"
          to={addLangToPath(`products/${product.title}`)}
        >
          {t("go to menu")} {t(product.title)}
          <svg
            className="inline-block relative left-[0.2rem] bottom-[0.05rem] w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductHeader;
