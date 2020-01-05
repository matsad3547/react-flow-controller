import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ProgressIndicator = ({
  origin,
  steps,
  completionIndicator
}) => {
  return React.createElement("div", {
    className: "fc-pi-root"
  }, steps.map(step => React.createElement(NavLink, {
    exact: true,
    to: `${origin}/${step.link}`,
    className: "fc-pi-step-link",
    activeClassName: "fc-pi-active-step-link",
    key: `${step.link}-step`
  }, React.createElement("div", {
    className: "fc-pi-step"
  }, step.label, " ", completionIndicator({
    isCompleted: step.isCompleted
  })))));
};

ProgressIndicator.propTypes = {
  origin: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  completionIndicator: PropTypes.elementType.isRequired
};
export default ProgressIndicator;