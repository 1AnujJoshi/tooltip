import React, { useState } from "react";

const Tooltip = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="tooltipContainer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* props.children contains the content between the opening and closing tags of a tooltip component */}
      {props.children}
      {hover && (
        <div className={`tooltip ${props.position || "right"}`}>
          {props.tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
