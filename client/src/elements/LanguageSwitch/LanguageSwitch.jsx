import i18n from "../../i18n/i18n";

export const LanguageSwitch = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <button onClick={() => {i18n.changeLanguage("en"); }} className="hover:text-[#ffd905]">
        En
      </button>
      <span> | </span>
      <button onClick={() => {i18n.changeLanguage("ru"); }} className="hover:text-[#ffd905]">
        Ru
      </button>
      <span> | </span>
      <button onClick={() => {i18n.changeLanguage("ro");}} className="hover:text-[#ffd905]">
        Ro
      </button>
    </div>
  );
};

export default LanguageSwitch;
