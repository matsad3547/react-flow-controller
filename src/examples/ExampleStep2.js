import React from 'react'
import Button from './Button'

const ExampleStep2 = ({setStep2}) => {

  const orangeVal = {
    label: 'Orange',
    color: 'orange',
  }
  const blueVal = {
    label: 'Blue',
    color: 'blue',
  }

  return (
    <div style={styles.root}>
      <h2>Orange or Blue?</h2>
      <div style={styles.buttons}>
        <Button
          color="black"
          label="CHOOSE ORANGE"
          background="orange"
          onClick={() => setStep2(orangeVal)}
          />
        <Button
          color="white"
          label="CHOOSE BLUE"
          background="blue"
          onClick={() => setStep2(blueVal)}
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

export default ExampleStep2
