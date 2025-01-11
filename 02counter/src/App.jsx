import { useState } from 'react'


function App() {

  let [counter, setCounter] = useState(15)
  const addValue = () => {
    counter = counter+1
    setCounter(counter)
  }

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
  }


  return (
    <>
   <h1>react journey</h1>
   <h2>Counter: {counter}</h2>
   <button onClick={addValue}>Increase value</button>
   <br />
   <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
