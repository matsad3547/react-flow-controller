import React from 'react'
import {
  HashRouter,
  // BrowserRouter,
  Route,
  Switch,
  NavLink,
  useHistory,
} from 'react-router-dom'

const Home = () => (<div>Home</div>)
const Test1 = () => (<div>Test 1</div>)
const Test2 = () => (<div>Test 2</div>)
const Test3 = () => (<div>Test 3</div>)

const Routes = () => {

  let history = useHistory()

  console.log('history:', history.location, 'window hash?', window.location.hash);

  const steps = [
    {
      link: 'test_1',
      component: Test1,
    },
    {
      link: 'test_2',
      component: Test2,
    },
    {
      link: 'test_3',
      component: Test3,
    },
  ]

  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      {
        steps.map( step => <Route path={`/${step.link}`} component={step.component} key={`${step.link}-route`}/>)
      }
    </Switch>
  )
}

const Test = () => {

  return (
    <HashRouter hashType="noslash">
      <h1>Test</h1>
      <div style={{display: 'flex',
    flexDirection: 'column',}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/test_1'>Test 1</NavLink>
        <NavLink to='/test_2'>Test 2</NavLink>
        <NavLink to='/test_3'>Test 3</NavLink>
      </div>
      <Routes />
    </HashRouter>
  )
}

export default Test
