import React, { useState } from 'react'
import Modal from './components/Modal/Modal'
import Products from './components/Products/Products'
import './App.scss'

const App = () => {
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div className='app'>
            <button className='open-btn' onClick={() => setIsOpen(true)}>Open modal</button>
            {isOpen && <Modal onClose={setIsOpen} />}
            <Products />
        </div>
    )
}

export default App