import React, {useReducer} from 'react'
import PropTypes from 'prop-types'
import { HashRouter } from 'react-router-dom'

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
  enabled,
}) => {

  const [state, dispatch] = useReducer(controllerReducer, initControllerState)

  return (
    <div className="flow-controller-body">
      {
        enabled &&
        <div>
          <HashRouter hashType="noslash">
            <FlowControllerSteps
              steps={steps}
              enabled={enabled}
              />
          </HashRouter>
        </div>
      }
    </div>
  )
}

FlowController.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.element,
    props: PropTypes.object,
    label: PropTypes.string,
    link: PropTypes.string,
    isVerified: PropTypes.bool,
  })),
  enabled: PropTypes.bool.isRequired,
}

export default FlowController
