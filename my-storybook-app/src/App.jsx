import { useState } from 'react'
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>Hello From Modal</div>
      </Modal>
    </>
  )
}

export default App
