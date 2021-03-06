import React from 'react'
import PropTypes from 'prop-types'

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import FlowControllerStep from './FlowControllerStep'
import ProgressIndicator from './ProgressIndicator'

const FlowController = ({
  steps,
  title,
  completionIndicator,
  match,
  history,
}) => {

  const { path } = match

  const { pathname } = history.location

  const origin = path === '/' ? '' : path

  const links = steps.map( step => step.link )

  const showFlowController = links.map( link => pathname.includes(link)).some( test => test )

  const onBackClick = index => {
    history.push(`${origin}/${steps[index - 1].link}`)
  }

  const onNextClick = index => {
    history.push(`${origin}/${steps[index + 1].link}`)
  }

  const onFinishClick = () => {
    history.push(path)
  }

  const firstAvailableStepIndex = steps.map( step => step.isCompleted).lastIndexOf(true) + 1

  const areAllCompleted = steps.every( step => step.isCompleted)

  return showFlowController ? (
    <div className="fc-root">
      <span className="fc-title">{title}</span>
      <ProgressIndicator
        steps={steps}
        origin={origin}
        completionIndicator={completionIndicator}
        />
      <Switch>
        {
          steps.map( (step, index) => <Route exact path={`${origin}/${step.link}`} render={() => index <= firstAvailableStepIndex ?
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
              <Redirect to={`${origin}/${steps[firstAvailableStepIndex].link}`} />
            }
            key={`${step.link}-route`}/>)
          }
          <Route component={null}/>
        </Switch>
    </div>
  ) : null
}

FlowController.propTypes = {
  steps: PropTypes.array.isRequired,
  title: PropTypes.string,
  completionIndicator: PropTypes.elementType.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default FlowController
