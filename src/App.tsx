import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { Sidebar } from './components/Sidebar'

function App() {
  const [itemMenuSelected, setItemMenuSelected] = useState("Home")

  return (
    <div className='container'>
      <Sidebar />
      <Home />

    </div>
  )
}

export default App
