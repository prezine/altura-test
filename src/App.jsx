import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import useModalStore from './utils/stores/useModalStore'

function App() {
  const [count, setCount] = useState(0)
  const modalOpenState = useModalStore(state=>state.modalOpenState)

  return (
    <div className={`App ${modalOpenState && 'overflow-hidden h-screen'}`}>
      <Routes>
        <Route index path='' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
