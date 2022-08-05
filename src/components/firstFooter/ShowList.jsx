import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
const ShowList = ({ item, index }) => {
  const [showList, setShowList] = React.useState(false);

  const { header, line1, line2, line3, line4, line5, id } = item;

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <div key={index}>
        <h5>
          {header}

          {showList ? (
            <RiArrowDropDownLine onClick={handleClick} className="dropIcon" />
          ) : (
            <RiArrowDropUpLine
              className={showList || "toggleIcon"}
              onClick={handleClick}
            />
          )}
        </h5>
        <ul className={showList && "toggleClass"}>
          <li>{line1}</li>
          <li>{line2}</li>
          <li>{line3}</li>
          <li>{line4}</li>
          <li>{line5}</li>
        </ul>
      </div>
    </div>
  );
};

export default ShowList;
