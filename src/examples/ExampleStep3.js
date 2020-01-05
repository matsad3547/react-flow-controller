import React from 'react'
import Button from './Button'

const ExampleStep3 = ({setStep3}) => {

  const redVal = {
    label: 'Red',
    color: 'red',
  }
  const greenVal = {
    label: 'Green',
    color: 'green',
  }

  return (
    <div style={styles.root}>
      <h2>Red or Green?</h2>
      <div style={styles.buttons}>
        <Button
          color="white"
          label="CHOOSE RED"
          background="red"
          onClick={() => setStep3(redVal)}
          />
        <Button
          color="white"
          label="CHOOSE GREEN"
          background="green"
          onClick={() => setStep3(greenVal)}
          />
      </div>
    </div>
  )
}

const styles = {
  root: {
  },
  buttons: {
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
  }
}

export default ExampleStep3
