import React from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'

import UnnestedExampleValues from './UnnestedExampleValues'

import '../components/DefaultStyles.css'

const UnnestedExample = () => {

  return (
    <div>
      <BrowserRouter>
        <UnnestedExampleValues/>
      </BrowserRouter>
    </div>
  )
}

export default UnnestedExample
