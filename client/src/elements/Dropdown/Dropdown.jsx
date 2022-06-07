import React, { useState } from "react";

export const Dropdown = (props) => {
  const { classNameHeader, header, classNameList, list } = props;
  const [show, setHidden] = useState(true);
  return (
    <div className="z-10">
      <button
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
        className={classNameHeader}
      >
        {header}
      </button>
      <ul
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
        hidden={show}
        className={classNameList}
      >
        {list.map((elem) => (
          <li key={elem.key}>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
