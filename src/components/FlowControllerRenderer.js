import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
} from 'react-router-dom'

import FlowController from './FlowController'

const FlowControllerRenderer = ({
  steps,
}) => {
  
  return (
    <Route render={
      ({match, history}) => <FlowController
        steps={steps}
        match={match}
        history={history}
        />
      }/>
  )
}

FlowControllerRenderer.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.element,
    label: PropTypes.string,
    link: PropTypes.string,
    isCompleted: PropTypes.bool,
  })),
  title: PropTypes.string,
}

export default FlowControllerRenderer
