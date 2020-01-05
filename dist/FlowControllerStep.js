import React from 'react';
import PropTypes from 'prop-types';

const FlowControllerStep = ({
  component,
  index,
  isCompleted,
  isFirst,
  isLast,
  onBackClick,
  onNextClick,
  areAllCompleted,
  onFinishClick
}) => {
  return React.createElement("div", {
    className: "fc-step"
  }, component, React.createElement("div", {
    className: isFirst ? 'fc-single-btn' : 'fc-btns'
  }, !isFirst && React.createElement("button", {
    type: "button",
    className: isCompleted ? 'fc-back-btn' : 'fc-btn-disabled',
    onClick: onBackClick
  }, "BACK"), isLast ? React.createElement("button", {
    type: "button",
    className: areAllCompleted ? 'fc-finish-btn' : 'fc-btn-disabled',
    disabled: !areAllCompleted,
    onClick: onFinishClick
  }, "FINISH") : React.createElement("button", {
    type: "button",
    className: isCompleted ? 'fc-next-btn' : 'fc-btn-disabled',
    disabled: !isCompleted,
    onClick: onNextClick
  }, "NEXT")));
};

FlowControllerStep.propTypes = {
  component: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  areAllCompleted: PropTypes.bool.isRequired,
  onFinishClick: PropTypes.func.isRequired
};
export default FlowControllerStep;