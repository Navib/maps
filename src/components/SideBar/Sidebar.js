import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import style from "./sideBar.scss";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <Drawer width={60} open={this.state.open} className="mapDrawer">
          <MenuItem>
            <FontIcon className="material-icons">home</FontIcon>
          </MenuItem>
          <MenuItem>
            <FontIcon className="material-icons">flight_takeoff</FontIcon>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
