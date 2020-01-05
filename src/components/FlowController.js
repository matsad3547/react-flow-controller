import React, {useReducer} from 'react'
import PropTypes from 'prop-types'
// import { BrowserRouter } from 'react-router-dom'

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
}) => {

  const [state, dispatch] = useReducer(controllerReducer, initControllerState)

  return (
    <div className="flow-controller-body">
      <FlowControllerSteps
        steps={steps}
        />
    </div>
  )
}

FlowController.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.element,
    label: PropTypes.string,
    link: PropTypes.string,
    isCompleted: PropTypes.bool,
  })),
  title: PropTypes.string,
}

export default FlowController
