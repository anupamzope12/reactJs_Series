import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Initialize counter with initial value 0
  let [counter, setCounter] = useState(0)

  // Function to increment counter
  const addValue = () => {
    console.log("clicked",Math.random())
    // Check counter value instead of setCounter
    if (counter < 20) {
      // Use the setter function to update the state
      setCounter(counter + 1)
    }
  }

  // Function to decrement counter
  const removeValue = () => {
    // Check counter value instead of setCounter
    if (counter > 0) {
      // Use the setter function to update the state
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
