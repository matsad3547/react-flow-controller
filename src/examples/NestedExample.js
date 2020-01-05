import React from 'react'
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom'

import NestedExampleValues from './NestedExampleValues'

const Home = () => <h1>Home</h1>

const NestedExample = () => {

  return (
    <div>
      <BrowserRouter>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Link to='/'>Home</Link>
          <Link to='/nested_example'>Nested Example</Link>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/nested_example' component={NestedExampleValues} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default NestedExample
