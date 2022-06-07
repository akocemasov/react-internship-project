import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import addLangToPath from "../../utils/addLangToPath";

import Login from "../../elements/Login/Login";
import Cart from "../../elements/Cart/Cart";
import Dropdown from "../../elements/Dropdown/Dropdown";

export const NavBar = (props) => {
  const { t } = useTranslation();
  const { className, navList } = props;

  return (
    <nav className={className}>
      <ul className="flex space-x-8 ml-[20%]">
        {navList.map((elem, index) =>
          elem.subMenu.length ? (
            <li key={elem._id}>
              <Dropdown
                classNameHeader="dropdown-menu flex items-center py-2 pl-3 pr-4 hover:text-[#ffd905] duration-300 ease-in-out"
                header={
                  <Link to={addLangToPath(elem.href)} className="flex items-center">
                    {t(elem.title)}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Link>
                }
                classNameList="absolute text-white"
                list={navList[index].subMenu.map((li) => (
                  <Link
                    key={li._id}
                    to={addLangToPath(`products/${li.title}`)}
                    className="block bg-[#1b1a1b] hover:text-[#ffd905] hover:text-lg py-1 px-5 duration-400 ease-in-out"
                  >
                    {t(li.title)}
                  </Link>
                ))}
              />
            </li>
          ) : (
            <li key={elem._id}>
              <Link
                to={addLangToPath(elem.href)}
                className="block py-2 text-white hover:text-[#ffd905] bg-transparent duration-300 ease-in-out"
              >
                {t(elem.title)}
              </Link>
            </li>
          )
        )}
      </ul>

      <Login className="header-login ml-[35%] hover:text-[#ffd905]" />
      <Cart className="header-cart hover:text-[#ffd905]" />
    </nav>
  );
};

export default NavBar;
