import { connect } from "react-redux";

import { selectProjectTitles } from "../../../redux/projects/projects.selectors";

import SidebarDrawer from "./sidebar-drawer.view";

const mapStateToProps = () => ({
  defaultProjectsTitles: selectProjectTitles("default"),
  userProjectsTitles: selectProjectTitles("user")
});

const SidebarDrawerContainer = connect(mapStateToProps)(SidebarDrawer);

export default SidebarDrawerContainer;
