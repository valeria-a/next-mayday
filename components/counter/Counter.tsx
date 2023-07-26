"use client"

import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    return(
        <>
        <p>{count}</p>
        <button onClick={()=>{setCount(prev=>prev+1)}}>+</button>
        </>
    )
}

export default Counter