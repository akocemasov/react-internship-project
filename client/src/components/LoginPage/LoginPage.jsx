import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import i18n from "../../i18n/i18n";
import addLangToPath from "../../utils/addLangToPath";
import { checkValid, getRegex } from "../../utils/validators";

import { updateLogin } from "../../redux/Login/actions/updateLogin.action";
import { signIn } from "../../redux/getServerData/actions/signIn.action";
import { signOut } from "../../redux/getServerData/actions/signOut.action";

export const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUrl = useLocation().pathname;
  const locales = i18n.languages;

  let { locale } = useParams();

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      let newUrl = addLangToPath(currentUrl.substring(4));
      navigate(newUrl);
      return;
    });
  }, [locale, currentUrl, locales, navigate]);

  const selectUser = (state) => state.user;
  const user = useSelector(selectUser);

  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const regex = getRegex(event.target.name);
    event.target.value = event.target.value.replace(regex, "");
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnClick = (event) => {
    event.preventDefault();

    // validate user
    Object.keys(userInput).forEach((key) => {
      let [isValid, errMsg] = checkValid(key, userInput[key]);
      if (!isValid) {
        alert(errMsg);
        return;
      }
    });

    dispatch(signIn(userInput));
  };

  useEffect(() => {
    if (!user || !user.ready) return;
    // console.log("user.payload=", user.payload);

    if (user.payload.err) {
      dispatch(signOut());
      alert(user.payload.message);
    } else {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(user.payload.message.accessToken)
      );
      localStorage.setItem(
        "userId",
        JSON.stringify(user.payload.message.id)
      );
      dispatch(updateLogin(true));
      navigate(addLangToPath(""));
    }
  }, [user]);

  return (
    <div className="login-page w-screen h-screen bg-[#1b1a1b]">
      <div className="flex flex-col ml-[40%] mt-[10%] w-[20%] h-[70%]">
        <div className="login-header text-center text-4xl font-bold text-white p-4">
          {t("Login")}
        </div>
        <form className="flex flex-col space-y-4 login-body border border-white p-2 rounded-md">
          <input
            type="text"
            className="px-4 py-3 text-neutral-800 bg-white rounded text-sm"
            placeholder="Username"
            name="username"
            onChange={handleOnChange}
          ></input>
          <input
            type="text"
            className="px-4 py-3 text-neutral-800 bg-white rounded text-sm"
            placeholder="Email"
            name="email"
            onChange={handleOnChange}
          ></input>
          <input
            type="password"
            className="px-4 py-3 text-neutral-800 bg-white rounded text-sm"
            placeholder={t("Password")}
            name="password"
            onChange={handleOnChange}
          ></input>
          <button
            type="submit"
            className="w-full px-6 py-3 border border-neutral-600 text-white text-sm font-medium bg-black hover:bg-neutral-800 uppercase rounded"
            onClick={handleOnClick}
          >
            {t("Login")}
          </button>
          <div className="w-full border-b-2 border-neutral-700"></div>
          <Link to={addLangToPath("register")} className="">
            <button
              type="button"
              className="w-full px-6 py-3 border border-neutral-600 text-white text-sm font-medium bg-black hover:bg-neutral-800 uppercase rounded"
            >
              {t("Register")}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
