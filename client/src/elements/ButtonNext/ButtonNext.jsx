export const ButtonNext = (props) => {
  const { className, onClick, name } = props;
  return (
    <button type="button" className={className} onClick={onClick} name={name}>
      <span className="pointer-events-none">
        <svg
          className="text-white w-10 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={(e) => e.stopPropagation()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default ButtonNext;
