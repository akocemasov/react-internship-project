import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import addLangToPath from "../../utils/addLangToPath";

import { getFooter } from "../../redux/getServerData/actions/getFooter.action";

import EmailForm from "../../components/EmailForm/EmailForm";

export const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const selectFooter = (state) => state.footer;
  const footer = useSelector(selectFooter);

  useEffect( () => {
    dispatch(getFooter());
  }, []);

  return (
    <footer className="footer flex bg-[#1b1a1b]">
      <div className="relative pt-[5rem] ml-[18%] w-[70%]">
        {footer && footer.ready && (
          <div className="flex justify-between">
            {footer.payload.map((elem) => (
              <div key={elem._id} className="mb-6">
                <h5 className="mb-2.5 text-[#ffd905]">{t(elem.title)}</h5>
                <ul className="">
                  {elem.subMenu.map((li) => (
                    <li key={li._id}>
                      <Link
                        to={addLangToPath(li.href)}
                        className="text-neutral-600 hover:text-white text-sm"
                      >
                        {t(li.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <EmailForm />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
