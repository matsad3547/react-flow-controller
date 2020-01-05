import React, {useEffect} from 'react'
import {
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom'

import FlowControllerStep from './FlowControllerStep'

const FlowControllerSteps = ({
  enabled,
  steps,
  onFinish,
}) => {

  let history = useHistory()

  console.log('window location?', window.location.origin );

  useEffect( () => {
    if (enabled) {
      history.push(`/${steps[0].link}`)
    }
  }, [history, steps, enabled])

  const onBackClick = index => {
    history.push(`/${steps[index - 1].link}`)
  }

  const onNextClick = index => {
    history.push(`/${steps[index + 1].link}`)
  }

  const onFinishClick = () => {
    history.push('/')
    onFinish()
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
    </Switch>
  )
}

export default FlowControllerSteps
