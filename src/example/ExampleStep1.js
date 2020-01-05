import React from 'react'
import Button from './Button'

const ExampleStep1 = ({setStep1}) => {

  const yellowVal = {
    label: 'Yellow',
    color: 'yellow',
  }
  const purpleVal = {
    label: 'Purple',
    color: 'purple',
  }

  return (
    <div style={styles.root}>
      <h2>Yellow or Purple?</h2>
      <div style={styles.buttons}>
        <Button
          color="black"
          label="CHOOSE YELLOW"
          background="yellow"
          onClick={() => setStep1(yellowVal)}
          />
        <Button
          color="white"
          label="CHOOSE PURPLE"
          background="purple"
          onClick={() => setStep1(purpleVal)}
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

export default ExampleStep1
