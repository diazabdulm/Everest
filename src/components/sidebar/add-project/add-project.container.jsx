import { connect } from "react-redux";

import { addProject } from "../../../redux/projects/projects.actions";

import AddProject from "./add-project.view";

const mapDispatchToProps = dispatch => ({
  addProject: projectData => dispatch(addProject(projectData))
});

const AddProjectContainer = connect(
  null,
  mapDispatchToProps
)(AddProject);

export default AddProjectContainer;
