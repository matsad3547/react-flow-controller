import React from 'react'
import PropTypes from 'prop-types'

const ProgressIndicator = ({steps}) => {
  return (
    <div className="progress-indicator-root">Progress Indicator</div>
  )
}

ProgressIndicator.propTypes = {
  steps: PropTypes.array.isRequired,
}

export default ProgressIndicator
