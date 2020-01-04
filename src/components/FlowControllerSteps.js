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
  let location = useLocation()

  console.log('location??', location);

  useEffect( () => {
    if (enabled) {
      history.push(`/${steps[0].link}`)
    }
  }, [history, steps, enabled])

  const onBackClick = () => console.log('go back')

  const onNextClick = () => console.log('go to next')

  const onFinishClick = () => {
    console.log('finish up')
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
            onBackClick={onBackClick}
            onNextClick={onNextClick}
            onFinishClick={onFinishClick}
          />
        }
        key={`${step.link}-route`}/>)
      }
    </Switch>
  )
}

export default FlowControllerSteps
