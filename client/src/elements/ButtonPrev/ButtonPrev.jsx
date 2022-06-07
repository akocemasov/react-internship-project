export const ButtonPrev = (props) => {
  const { className, onClick, name } = props;
  return (
    <button type="button" className={className} onClick={onClick} name={name}>
      <span className="pointer-events-none">
        <svg
          className="text-white w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default ButtonPrev;
