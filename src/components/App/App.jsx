import { useState } from 'react'
import { Confirmation } from '../Confirmation/Confirmation'
import { Form } from '../Form/Form.jsx'
import './App.css'

function App() {

  const [form, setForm ] = useState({rating: 0})

  const handleChange = (event) => {
    const {name, value} = event.target
    
    setForm( prev => ({
      ...prev,
      [name]: parseInt(value),
    }))
  }

  console.log(form)

  return (
    <>
      <Form name="rating" number={5} formObject={form} handleChange={handleChange} />
    </>
  )
}

export default App
