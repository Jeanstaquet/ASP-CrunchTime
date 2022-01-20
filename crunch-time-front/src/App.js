import './App.css'
import React from 'react'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    const incCount = () => {
        setCount(count + 1)
    }
    return (
        <div className="App">
            <h1>Hello World</h1>
            <p>{count}</p>
            <button onClick={incCount}>Add 1</button>
        </div>
    )
}

export default App
