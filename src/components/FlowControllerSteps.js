import React from 'react'
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'

import FlowControllerStep from './FlowControllerStep'

const FlowControllerSteps = ({
  enabled,
  steps,
}) => {

  let history = useHistory()

  const onBackClick = index => {
    history.push(`/${steps[index - 1].link}`)
  }

  const onNextClick = index => {
    history.push(`/${steps[index + 1].link}`)
  }

  const onFinishClick = () => {
    history.push('/')
  }

  return (
    <Switch>
      {
        steps.map( (step, index) => <Route exact path={`/${step.link}`} render={() => <FlowControllerStep
            component={step.component}
            isCompleted={step.isCompleted}
            index={index}
            isFirst={index === 0}
            isLast={index === steps.length - 1}
            onBackClick={() => onBackClick(index)}
            onNextClick={() => onNextClick(index)}
            onFinishClick={onFinishClick}
          />
        }
        key={`${step.link}-route`}/>)
      }
      <Route component={null}/>
    </Switch>
  )
}

export default FlowControllerSteps
