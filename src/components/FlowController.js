import React from 'react'
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom'

import FlowControllerStep from './FlowControllerStep'
import ProgressIndicator from './ProgressIndicator'

const FlowController = ({
  steps,
  match,
  history,
}) => {

  const {
    path,
  } = match

  const links = steps.map( step => step.link )

  let { pathname } = useLocation()

  const showFlowController = links.map( link => pathname.includes(link)).some( test => test)

  const onBackClick = index => {
    history.push(`${path}/${steps[index - 1].link}`)
  }

  const onNextClick = index => {
    history.push(`${path}/${steps[index + 1].link}`)
  }

  const onFinishClick = () => {
    history.push(path)
  }

  const firstAvailableStepIndex = steps.map( step => step.isCompleted).lastIndexOf(true) + 1

  const areAllCompleted = steps.every( step => step.isCompleted)

  return showFlowController ? (
    <div className="flow-controller-root">
      <ProgressIndicator/>
      <Switch>
        {
          steps.map( (step, index) => <Route exact path={`${path}/${step.link}`} render={() => index <= firstAvailableStepIndex ?
            <FlowControllerStep
              component={step.component}
              isCompleted={step.isCompleted}
              index={index}
              isFirst={index === 0}
              isLast={index === steps.length - 1}
              onBackClick={() => onBackClick(index)}
              onNextClick={() => onNextClick(index)}
              onFinishClick={onFinishClick}
              areAllCompleted={areAllCompleted}
              /> :
              <Redirect to={`${path}/${steps[firstAvailableStepIndex].link}`} />
            }
            key={`${step.link}-route`}/>)
          }
          <Route component={null}/>
        </Switch>
    </div>
  ) : null
}

export default FlowController
