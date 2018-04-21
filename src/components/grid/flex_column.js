import React from "react";

const FlexColumn = props => {
  const { children, ...otherProps } = props;
  const flexStyle = {
    flexBasis: `${props.width ? props.width / 12 * 100 : "100"}% `,
    maxWidth: `${props.width ? props.width / 12 * 100 : "100"}% `
  };
  return (
    <div className={`flex-column flex-col-${props.width}`} style={flexStyle}>
      {children}
    </div>
  );
};

export default FlexColumn;
