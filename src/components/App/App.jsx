import { useState } from 'react'
import { Confirmation } from '../Confirmation/Confirmation'
import { Form } from '../Form/Form'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="app_container">
      <Form />
    </div>
  )
}

export default App
