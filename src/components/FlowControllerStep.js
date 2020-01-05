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
      <div className={isFirst ? 'flow-controller-single-btn' : 'flow-controller-btns'}>
        {
          !isFirst &&
          <button
            type="button"
            className={isCompleted ? 'flow-controller-back-btn' : 'flow-controller-btn-disabled'} onClick={onBackClick}>BACK</button>
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
