import React from 'react'

const FlowControllerStep = ({
  component,
  index,
  isCompleted,
  isFirst,
  isLast,
  onBackClick,
  onNextClick,
  onFinishClick,
}) => {

  return (
    <div className="flow-controller-step">
      {component}
      <div className="flow-controller-btns">
        {
          !isFirst &&
          <button type="button" className="flow-controller-back-btn" onClick={onBackClick}>BACK</button>
        }
        {
          isLast ?
          <button
            type="button"
            className={isCompleted ? 'flow-controller-finish-btn' : 'flow-controller-btn-disabled'}
            disabled={!isCompleted}
            onClick={onFinishClick}>FINISH</button> :
          <button
            type="button"
            className={isCompleted ? 'flow-controller-next-btn' : 'flow-controller-btn-disabled'}
            disabled={!isCompleted}
            onClick={onNextClick}>NEXT</button>
          }
      </div>
    </div>
  )
}

export default FlowControllerStep
