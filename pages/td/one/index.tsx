import type { NextPage } from 'next'
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {debounce, throttle} from "lodash"

// ref: https://dmitripavlutin.com/react-throttle-debounce/
const TDOnePage: NextPage = () => {
  // debounce
  const [value, setValue] = useState("")

  const logInput = useCallback((newValue: string)=>{
    console.log(newValue)
  },[])

  // as default option, 
  // leading: false
  // trailing: true
  const debouncedLogInput = useMemo(()=>debounce(logInput, 500), [logInput])

  useEffect(()=>{
    debouncedLogInput(value)
    // logInput(value)
  },[debouncedLogInput, value])

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = useCallback((event)=>{
    setValue(event.currentTarget.value)
  },[])

  // throttle
  const logScroll = useCallback(()=>{
    console.log("scrolling")
  },[])

  // as default option, 
  // leading: true
  // trailing: true
  const throttledLogScroll = useMemo(()=>throttle(logScroll, 2000), [logScroll])

  const handleScroll = useCallback(()=>{
    throttledLogScroll()
  },[throttledLogScroll])

  useEffect(() => {
    console.log("window", window)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(()=>{
    return () => {
      debouncedLogInput.cancel()
      throttledLogScroll.cancel()
    }
  },[debouncedLogInput, throttledLogScroll])

  return (
    <div style={{height: 5000}}>
      <input onChange={handleChangeInput}/>
    </div>
  )
}

export default TDOnePage