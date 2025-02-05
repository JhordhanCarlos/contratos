import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { Sidebar } from './components/Sidebar'

function App() {
  const [menuSelected, setMenuSelected] = useState('Home')

  return (
    <div className='container'>
      <Sidebar />
      {menuSelected === 'Home' && <Home />}
      {menuSelected === 'Dashboard' && <Dashboard />}
    </div>
  )
}

export default App
