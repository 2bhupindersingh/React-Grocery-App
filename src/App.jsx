import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Grocery from './components/Grocery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Grocery />
    </>
  )
}

export default App
