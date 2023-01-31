import React from 'react'
import { nanoid } from 'nanoid'
import './inputForm.css'

const InputForm = ({ value, name, handleChange, form }) => {

    const idFor = nanoid(4)

    return (
        <>
            <input
                className='input_form_input'
                type="radio"
                id={idFor} 
                name={name} 
                value={value}
                onChange={handleChange}
                checked={form[name] === value}
            />
            
            <label
                className='input_form_label' 
                htmlFor={idFor}
            >
                {value}
            </label>
        </>
    )
}

export { InputForm }