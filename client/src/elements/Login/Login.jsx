import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import addLangToPath from "../../utils/addLangToPath";

import { updateLogin } from "../../redux/Login/actions/updateLogin.action";
import { signOut } from "../../redux/getServerData/actions/signOut.action";

export const Login = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { className } = props;

  const selectLogin = (state) => state.login;
  const login = useSelector(selectLogin);

  const handleOnClick = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    dispatch(updateLogin(false));
    dispatch(signOut());
  };

  useEffect(() => {
    let isLogin = false;
    if (JSON.parse(localStorage.getItem("accessToken"))) {
      isLogin = true;
    }
    dispatch(updateLogin(isLogin));
  }, []);

  return (
    <div className={className}>
      {login && login.exist ? (
        <Link className="" to={addLangToPath("")} onClick={handleOnClick}>
          <span>
            <svg
              className="inline-block w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
            {t("Logout")}
          </span>
        </Link>
      ) : (
        <Link className="" to={addLangToPath("login")}>
          <span>
            <svg
              className="inline-block w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
            {t("Login")}
          </span>
        </Link>
      )}
    </div>
  );
};

export default Login;
