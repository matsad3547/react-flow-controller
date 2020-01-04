import React, {useState} from 'react'

const Example = () => {

  const [step1Value, setStep1] = useState(null)
  const [step2Value, setStep2] = useState(null)
  const [step3Value, setStep3] = useState(null)

  return (
    <div className="example-flow-controller">
      <h1>Flow Controller Example</h1>
      <button type="button" onClick={() => console.log('clicking a button')}>SET VALUES</button>
      <h2>Step 1 Value</h2>
      <div>{step1Value || "?"}</div>
      <h2>Step 2 Value</h2>
      <div>{step2Value || "?"}</div>
      <h2>Step 3 Value</h2>
      <div>{step3Value || "?"}</div>
    </div>
  )
}

export default Example
