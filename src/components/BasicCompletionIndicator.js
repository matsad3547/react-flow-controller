import React from 'react'
import PropTypes from 'prop-types'

const BasicCompletionIndicator = ({isCompleted}) => {

  return (
    <div className={`fc-pi-completion-indicator ${isCompleted ? 'fc-pi-step-complete' : 'fc-pi-step-incomplete'}`}>{`\u2713`}</div>
  )
}

BasicCompletionIndicator.propTypes = {
  isCompleted: PropTypes.bool.isRequired
}

export default BasicCompletionIndicator
