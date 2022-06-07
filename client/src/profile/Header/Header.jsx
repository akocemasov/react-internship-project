import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import addLangToPath from "../../utils/addLangToPath";

import { getLogo } from "../../redux/getServerData/actions/getLogo.action";
import { getContacts } from "../../redux/getServerData/actions/getContacts.action";
import { getPartners } from "../../redux/getServerData/actions/getPartners.action";
import { getNavlist } from "../../redux/getServerData/actions/getNavlist.action";

import Logo from "../../elements/Logo/Logo";
import LanguageSwitch from "../../elements/LanguageSwitch/LanguageSwitch";
import LogoPartners from "../../elements/LogoPartners/LogoPartners";
import NavBar from "../../components/NavBar/NavBar";
import Dropdown from "../../elements/Dropdown/Dropdown";

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const selectLogo = (state) => state.logo;
  const logo = useSelector(selectLogo);

  const selectContacts = (state) => state.contacts;
  const contacts = useSelector(selectContacts);

  const selectPartners = (state) => state.partners;
  const partners = useSelector(selectPartners);

  const selectNavlist = (state) => state.navlist;
  const navlist = useSelector(selectNavlist);

  useEffect(() => {
    dispatch(getLogo());
    dispatch(getContacts());
    dispatch(getPartners());
    dispatch(getNavlist());
  }, []);

  return (
    <header className="header flex fixed w-full z-10 h-40 text-white bg-gradient-to-b from-black/100 to-black/50">
      {logo && logo.ready && (
        <Logo logo={logo.payload[0]} className="h-[70%] ml-[70%] mt-[5%]" />
      )}
      <div className="header-main block w-[58%]">
        <div className="header-addt flex justify-between h-[30%] mt-[1%]">
          {contacts && contacts.ready && (
            <Dropdown
              classNameHeader="dropdown-contacts flex justify-between py-1 pl-3 pr-4 text-sm text-neutral-500 hover:text-[#ffd905] duration-300 ease-in-out"
              header={
                <div className="flex justify-between items-center">
                  <span className="">{t(contacts.payload[0].city) + ":"}</span>
                  <span className="flex ml-2 items-center text-lg">
                    {contacts.payload[0].telefone}
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
                  </span>
                </div>
              }
              classNameList="absolute w-[15%] py-1 text-neutral-500"
              list={contacts.payload.map((elem) => (
                <Link
                  key={elem._id}
                  to={addLangToPath(elem.href)}
                  className="flex justify-between bg-[#1b1a1b] py-1 px-4 block hover:text-[#ffd905] duration-100 ease-in-out"
                >
                  <span className="text-neutral-300">{t(elem.city) + ":"}</span>
                  <span className="ml-2 text-lg hover:text-xl">
                    {elem.telefone}
                  </span>
                </Link>
              ))}
            />
          )}
          {partners && partners.ready && (
            <LogoPartners
              logos={partners.payload}
              className="inline-block h-[50%]"
            />
          )}
          <LanguageSwitch className="landuage-list inline-block text-neutral-500 text-base" />
        </div>
        {navlist && navlist.ready && (
          <NavBar
            className="header-navbar flex justify-between mt-[1rem]"
            navList={navlist.payload}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
