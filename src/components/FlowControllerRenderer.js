import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
} from 'react-router-dom'

import FlowController from './FlowController'
import BasicCompletionIndicator from './BasicCompletionIndicator'

const FlowControllerRenderer = ({
  steps,
  title = '',
  completionIndicator = BasicCompletionIndicator
}) => {

  return (
    <Route render={
      ({match, history}) => <FlowController
        steps={steps}
        title={title}
        match={match}
        history={history}
        completionIndicator={completionIndicator}
        />
      }/>
  )
}

FlowControllerRenderer.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  })).isRequired,
  title: PropTypes.string,
}

export default FlowControllerRenderer
