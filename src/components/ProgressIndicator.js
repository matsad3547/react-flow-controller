import React from 'react'
import PropTypes from 'prop-types'

import {
  NavLink,
} from 'react-router-dom'

const ProgressIndicator = ({
  origin,
  steps,
  completionIndicator,
}) => {

  return (
    <div className="fc-pi-root">
      {
        steps.map( step =>
          <NavLink
            exact
            to={`${origin}/${step.link}`}
            className="fc-pi-step-link"
            activeClassName="fc-pi-active-step-link"
            key={`${step.link}-step`}
            >
            <div className="fc-pi-step">
              {step.label} {completionIndicator({isCompleted: step.isCompleted})}
            </div>
          </NavLink>
        )
      }
    </div>
  )
}

ProgressIndicator.propTypes = {
  origin: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  completionIndicator: PropTypes.elementType.isRequired,
}

export default ProgressIndicator
