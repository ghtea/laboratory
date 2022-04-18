import type { NextPage } from 'next'
import { useCallback, useEffect, useRef, useState } from 'react'

const IntervalPage: NextPage = () => {
  const [second, setSecond] = useState(new Date().getSeconds())
  const [minute, setMinute] = useState(new Date().getMinutes())
  const [text, setText] = useState("")

  const updateText = useCallback(()=> {
    setText(`${minute}:${second}`)
  },[minute, second])

  const updateTextRef = useRef(updateText)

  useEffect(()=>{
    updateTextRef.current = updateText
  },[updateText])

  useEffect(()=>{      
    console.log("create intervalTimer");

    const intervalTimer = setInterval(()=>{
      console.log("interval callback is called")
      updateTextRef.current()
    }, 1000)

    return () => {
      console.log("remove intervalTimer");
      clearInterval(intervalTimer)
    }
  },[])

  return (
    <div style={{padding: 16}}>
      <div style={{padding: 16}}>{second}</div>
    </div>
  )
}



export default IntervalPage