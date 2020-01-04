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
    padding: '2em',
    // border: '1px solid gray',
  },
  buttons: {
    display: 'inline-flex',
    width: '30%',
    justifyContent: 'space-between',
  }
}

export default ExampleStep1
