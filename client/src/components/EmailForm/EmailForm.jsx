import { useTranslation } from "react-i18next";

export const EmailForm = () => {
  const { t } = useTranslation();
  return (
    <div>
      <form className="form-email" action="">
        <div className="mb-3">
          <h5 className="text-white">{t("Sign up for newsletter")}</h5>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <input
              type="text"
              className="w-[14.5rem] px-4 py-3 text-neutral-800 bg-white rounded text-sm"
              placeholder={t("Your email")}
            />
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="relative left-[0.5rem] inline-block px-6 py-3 border-2 border-neutral-600 text-white text-sm bg-black hover:bg-neutral-800 uppercase rounded"
            >
              {t("Subscribe")}
            </button>
          </div>
        </div>
      </form>
      <div className="flex text-white">
        <img src="https://www.andys.md/assets/img/pays.png" alt="pays"></img>
        <a href="https://www.facebook.com/andysclubmd/">
          {/* TODO: insert facebook svg */}
        </a>
        <a href="https://www.instagram.com/andys.md/?hl=ru">
          {/* TODO: insert instagram svg */}
        </a>
        <a href="https://www.youtube.com/user/andyspizzaclub?sub_confirmation=1">
          {/* TODO: insert youtube svg */}
        </a>
      </div>
    </div>
  );
};

export default EmailForm;
