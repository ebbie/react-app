import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
        // console.log('test');
    }
  render() {
      console.log(this.props);
    return (
        <li className="Project">
            <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href = '#' onClick = {this.deleteProject.bind(this, this.props.project.id)}>X</a>
        </li>
        );
  }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
  }
// You can't user class or for as an attribute in JSX. If we using for, then we have to use htmlFor

export default ProjectItem;
