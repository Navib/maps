import React from "react";

const FlexWrapper = props => {
  const { children, ...otherProps } = props;
  const flexStyle = {
    display: "flex",
    flexFlow: "row wrap",
    width: "100%"
  };
  return (
    <div className="flex-wrapper" style={flexStyle}>
      {children}
    </div>
  );
};

export default FlexWrapper;
