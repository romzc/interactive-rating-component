import React from 'react'
import startIcon from '../../assets/icon-star.svg'
import { InputForm } from '../InputForm/InputForm.jsx'
import { nanoid } from 'nanoid'
import './form.css'
/**
 * 
 * @param {name, rating} param, 
 * name is for name property to inputs
 * rating is an array with numbers or words 
 * @returns 
 */
const Form = ({ name, number, formObject, handleChange, handleSubmit }) => {

    //   const inputItems = rating.map(item => {

    //})

    const getInputs = (size) => {
        const inputs = []
        for (let i = 0; i < size; i++) {
            inputs.push(
                <InputForm
                    value={i + 1}
                    name={name}
                    handleChange={handleChange}
                    form={formObject}
                    key={nanoid(4)}
                />
            )
        }
        return inputs
    }

    const formInputs = getInputs(number)


    return (
        <form onSubmit={handleSubmit} className='form_container'>
            <span><img src={startIcon} alt="start" /></span>
            <h2>How did we do</h2>
            <p>
                Please let us know how we did with your suport request.
                All feedback is appreciated to hel us improve our offering!
            </p>
            <div className='form__input'>
                {formInputs}
            </div>
            <button className='form_button'>Submit</button>
        </form>
    )
}

export { Form }