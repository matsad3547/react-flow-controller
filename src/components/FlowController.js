import React, {useReducer} from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

import FlowControllerSteps from './FlowControllerSteps'

const initControllerState = {
  verfiedSteps: [],
}

const controllerReducer = (state, action) => {
  switch (action.type) {
    case 'VERIFY_STEP':
      return {
        ...state,
        verfiedSteps: [...state.verifiedSteps, action.step],
      }

    default:

  }
}

const FlowController = ({
  steps,
  title,
  enabled,
  onFinish,
}) => {

  const [state, dispatch] = useReducer(controllerReducer, initControllerState)

  return enabled ?
    <div className="flow-controller-body">
      <span>{title}</span>
      <BrowserRouter >
        <FlowControllerSteps
          steps={steps}
          enabled={enabled}
          onFinish={onFinish}
          />
      </BrowserRouter>
    </div> : null
}

FlowController.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.element,
    label: PropTypes.string,
    link: PropTypes.string,
    isCompleted: PropTypes.bool,
  })),
  enabled: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onFinish: PropTypes.func.isRequired,
}

export default FlowController
