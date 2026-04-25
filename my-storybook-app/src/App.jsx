import { useState } from 'react'
// แก้ Path การ Import ให้ตรงตามโครงสร้างโฟลเดอร์ในรูปของคุณ
import Register from './Page/Register/Register' 

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      {/* เรียกใช้งาน Component Register ตรงนี้ */}
      <Register />
    </div>
  )
}

export default App
