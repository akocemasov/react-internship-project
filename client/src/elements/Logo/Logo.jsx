import { Link } from "react-router-dom";
import addLangToPath from "../../utils/addLangToPath";

export const Logo = (props) => {
  const { logo, className } = props;
  return (
    <Link to={addLangToPath(logo.href)} className="w-[25%]">
      <img src={logo.src} alt={logo.alt} className={className} {...props}></img>
    </Link>
  );
};

export default Logo;
