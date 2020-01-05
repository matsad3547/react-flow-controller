import React from 'react';
import PropTypes from 'prop-types';

const BasicCompletionIndicator = ({
  isCompleted
}) => {
  return React.createElement("div", {
    className: `fc-pi-completion-indicator ${isCompleted ? 'fc-pi-step-complete' : 'fc-pi-step-incomplete'}`
  }, `\u2713`);
};

BasicCompletionIndicator.propTypes = {
  isCompleted: PropTypes.bool.isRequired
};
export default BasicCompletionIndicator;