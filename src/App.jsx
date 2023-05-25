import { useState } from 'react'
import './App.css'
// import Home from './pages/Home'
import ListView from './pages/ListView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      {/* <Home /> */}
      <ListView />
    
    </div>
  )
    
}

export default App
