import ProductHeader from "../ProductHeader/ProductHeader";
import ProductSlider from "../ProductSlider/ProductSlider";

export const Product = (props) => {
  const { product } = props;
  return product && (
    <div className="">
      <ProductHeader product={product} />
      <ProductSlider product={product} />
    </div>
  );
};

export default Product;
