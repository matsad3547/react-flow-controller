import React, {useState} from 'react'
import {
  BrowserRouter,
  Link,
} from 'react-router-dom'

import Button from './Button'
import ExampleStep1 from './ExampleStep1'
import ExampleStep2 from './ExampleStep2'

import FlowController from '../components/'

import './Example.css'

const Example = () => {

  const [step1Value, setStep1] = useState(null)
  const [step2Value, setStep2] = useState(null)
  const [step3Value, setStep3] = useState(null)

  return (
    <div className="example-flow-controller">
      <BrowserRouter>
        <h1>Flow Controller Example</h1>
        <Link to="/step_1">
          <Button
            color="black"
            label="SET VALUES"
            background="light-gray"/>
        </Link>
        <h2>Step 1 Value</h2>
        <div style={step1Value && getValueStyle(step1Value.color)}>{step1Value ? step1Value.label : "?"}</div>
        <h2>Step 2 Value</h2>
        <div style={step2Value && getValueStyle(step2Value.color)}>{step2Value ? step2Value.label : "?"}</div>
        <h2>Step 3 Value</h2>
        <div style={step3Value && getValueStyle(step3Value.color)}>{step3Value ? step3Value.label : "?"}</div>
        <FlowController
          steps={[
            {
              component: ExampleStep1({setStep1}),
              label: 'Step 1',
              link: 'step_1',
              isCompleted: step1Value !== null,
            },
            {
              component: ExampleStep2({setStep2}),
              label: 'Step 2',
              link: 'step_2',
              isCompleted: step2Value !== null,
            },
          ]}
          />
      </BrowserRouter>
    </div>
  )
}

const getValueStyle = color => ({
  padding: '1em 2em',
  border: `2px solid ${color}`,
})

export default Example
