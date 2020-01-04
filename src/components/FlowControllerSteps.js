import React, {useEffect} from 'react'
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'

const FlowControllerSteps = ({enabled, steps}) => {

  let history = useHistory()

  console.log('history??', history);

  useEffect( () => {
    if (enabled) {
      history.push(`/${steps[0].link}`)
    }
  }, [history, steps, enabled])

  return (
    <Switch>
      {
        steps.map( step => <Route exact path={`/${step.link}`} render={() => {
          console.log('rendering???');
          return step.component
        }}
        key={`${step.link}-route`}/>)
      }
    </Switch>
  )
}

export default FlowControllerSteps
