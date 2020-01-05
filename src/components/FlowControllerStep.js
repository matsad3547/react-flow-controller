import React from 'react'
import PropTypes from 'prop-types'

const FlowControllerStep = ({
  component,
  index,
  isCompleted,
  isFirst,
  isLast,
  onBackClick,
  onNextClick,
  areAllCompleted,
  onFinishClick,
}) => {

  return (
    <div className="fc-step">
      {component}
      <div className={isFirst ? 'fc-single-btn' : 'fc-btns'}>
        {
          !isFirst &&
          <button
            type="button"
            className={isCompleted ? 'fc-back-btn' : 'fc-btn-disabled'} onClick={onBackClick}>BACK</button>
        }
        {
          isLast ?
          <button
            type="button"
            className={areAllCompleted ? 'fc-finish-btn' : 'fc-btn-disabled'}
            disabled={!areAllCompleted}
            onClick={onFinishClick}>FINISH</button> :
          <button
            type="button"
            className={isCompleted ? 'fc-next-btn' : 'fc-btn-disabled'}
            disabled={!isCompleted}
            onClick={onNextClick}>NEXT</button>
          }
      </div>
    </div>
  )
}

FlowControllerStep.propTypes = {
  component: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  areAllCompleted: PropTypes.bool.isRequired,
  onFinishClick: PropTypes.func.isRequired,
}

export default FlowControllerStep
