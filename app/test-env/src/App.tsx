import { useState } from 'react'
import './App.css'
import { Button } from 'headless-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Button label={"Matang - " + count} onClick={() => setCount(count + 1)} />
    </>
  )
}

export default App
