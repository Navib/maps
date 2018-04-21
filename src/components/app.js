import React from "react";
import PropTypes from "prop-types";

import FlexWrapper from "./grid/flex_wrapper";
import FlexColumn from "./grid/flex_column";
import SideBar from "./SideBar/SideBar";
import Map from "./Map/Map";

const App = props => (
  <FlexWrapper>
    <SideBar />
    <FlexColumn width="12">
      <Map />
    </FlexColumn>
  </FlexWrapper>
);

App.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

App.defaultProps = {
  buttonText: "defaultText",
  onClick: () => console.log("default click action")
};

export default App;
