import React from 'react'
import PropTypes from 'prop-types'

import {
  NavLink,
} from 'react-router-dom'

const ProgressIndicator = ({
  origin,
  steps,
}) => {
  return (
    <div className="progress-indicator-root">
      {
        steps.map( step => <NavLink
          exact
          to={`${origin}/${step.link}`}
          className="progress-indicator-step"
          activeClassName="progress-indicator-active-step"
          key={`${step.link}-step`}>{step.label}</NavLink>
        )
      }
    </div>
  )
}

ProgressIndicator.propTypes = {
  steps: PropTypes.array.isRequired,
}

export default ProgressIndicator
