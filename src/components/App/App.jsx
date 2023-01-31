import { useState } from 'react'
import { Confirmation } from '../Confirmation/Confirmation'
import { Form } from '../Form/Form.jsx'
import './App.css'

function App() {

  const [form, setForm ] = useState({rating: 0})
  const [confirmation, setConfirmation] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target  
    setForm( prev => ({
      ...prev,
      [name]: parseInt(value),
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(form.rating != 0)
      setConfirmation(prev => !prev)
  }


  return (
    <>
      {
        confirmation ?
          <Confirmation value={form.rating}/>
          :
          <Form 
            name="rating" 
            number={5} 
            formObject={form} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
      }
    </>
  )
}

export default App
