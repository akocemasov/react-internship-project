import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import i18n from "../../i18n/i18n";
import addLangToPath from "../../utils/addLangToPath";
import { checkValid, getRegex } from "../../utils/validators";

import { signUp } from "../../redux/getServerData/actions/signUp.action";
import { signOut } from "../../redux/getServerData/actions/signOut.action";

export const RegisterPage = () => {
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
    passwordConfirm: "",
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
    if (userInput.password !== userInput.passwordConfirm) {
      alert("Failed! Confirm password do not match.");
      return;
    }
    delete userInput.passwordConfirm; // remove passwordConfirm property

    dispatch(signUp(userInput));
  };

  useEffect(() => {
    if (!user || !user.ready) return;

    if (user.payload.err) {
      dispatch(signOut());
      alert(user.payload.message);
      return;
  } else {
      dispatch(signOut());
      navigate(addLangToPath("login"));
    }

  }, [user]);

  return (
    <div className="login-page w-screen h-screen bg-[#1b1a1b]">
      <div className="flex flex-col ml-[40%] mt-[10%] w-[20%] h-[70%]">
        <div className="login-header text-center text-4xl font-bold text-white p-4">
          {t("Registration")}
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
          <input
            type="password"
            className="px-4 py-3 text-neutral-800 bg-white rounded text-sm"
            placeholder={t("Confirm") + " " + t("Password")}
            name="passwordConfirm"
            onChange={handleOnChange}
          ></input>
          <div className="w-full border-b-2 border-neutral-700"></div>
          <button
            type="submit"
            className="w-full px-6 py-3 border border-neutral-600 text-white text-sm font-medium bg-black hover:bg-neutral-800 uppercase rounded"
            onClick={handleOnClick}
          >
            {t("Register")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
