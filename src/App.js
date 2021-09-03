import React, { useState } from 'react'
import Modal from './components/Modal/Modal'
import './App.scss'

const App = () => {
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div>
            <button onClick={() => setIsOpen(true)}>Open modal</button>
            {isOpen && <Modal onClose={setIsOpen} />}
        </div>
    )
}

export default App