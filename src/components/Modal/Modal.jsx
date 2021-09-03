import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const Modal = ({ onClose }) => {
     const [name,setName] = useState('')
     const [error,setError] = useState(null)
     const inputRef = useRef(null)

     useEffect(() => {
         if(!name.length) {
             setError(true)
         } else {
             setError(false)
         }
     },[name])

     useEffect(() => {
        inputRef.current.focus()
     },[])

     const handleNameChange = (evt) => {
         setName(evt.target.value)
     }

     const handleClose = () => {
        if(!error) {
            onClose(false)
        }
     }

     return ReactDOM.createPortal(
        <>
        <div className='overlay' />
        <div className='modal'>
           <p className="modal__title">Smart Diner</p>
           <div className="modal__input-box">
           <input ref={inputRef} type='text' className='modal__input' value={name} onChange={handleNameChange} placeholder='Enter name' />
           <span className="modal__input-focus"></span>
           </div>
           {error && <small className='modal__error'>Please enter input</small>}
           <button onClick={handleClose} className="modal__cta">Close</button>
        </div>
       </>,
        document.querySelector('#modal')
    )
}

export default Modal