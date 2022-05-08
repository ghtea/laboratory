import type { NextPage } from 'next'
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'

const TDTwoPage: NextPage = () => {
  // debounce
  const [value, setValue] = useState("")

  const logInput = useCallback((newValue: string)=>{
    console.log(newValue)
  },[])

  const logInputRef = useRef(logInput)

  useEffect(()=>{
    logInputRef.current = logInput
  }, [logInput])

  const [debouncedLogInput, cancelDebouncedLogInput] = useMemo(()=>
    debounce((...args: Parameters<typeof logInput>)=>logInputRef.current(...args), 500)
  , [])

  useEffect(()=>{
    return () => {
      cancelDebouncedLogInput()
    }
  },[cancelDebouncedLogInput])

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

  const logScrollRef = useRef(logScroll)

  useEffect(()=>{
    logScrollRef.current = logScroll
  }, [logScroll])

  const [throttledLogScroll, cancelThrottledLogScroll] = useMemo(()=>
    throttle((...args: Parameters<typeof logScroll>)=>logScrollRef.current(...args), 500)
  , [])

  useEffect(()=>{
    return () => {
      cancelThrottledLogScroll()
    }
  },[cancelThrottledLogScroll])


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

  return (
    <div style={{height: 5000}}>
      <input onChange={handleChangeInput}/>
    </div>
  )
}

export default TDTwoPage


const debounce = <Callback extends (...args: any) => any>(callback: Callback, delay: number) => {
  let timeOutId: ReturnType<typeof setTimeout> | null = null;
  
  // make order to call callback after delay, 
  // but if it's called again within delay,
  // it increase entire delay
  const debouncedCallback = (...args: Parameters<Callback>) => {
    if (timeOutId) {
      clearTimeout(timeOutId)
    }

    timeOutId = setTimeout(()=>{
      callback(...args)
      timeOutId = null
    }, delay)
  }

  const cancel = () => {
    if (!timeOutId) return 

    clearTimeout(timeOutId)
  }

  return [debouncedCallback, cancel] as const
}

const throttle = <Callback extends (...args: any) => any>(callback: Callback, delay: number) => {
  let timeOutId: ReturnType<typeof setTimeout> | null = null;

  // make order to call callback after delay,
  // at the same time, it disabled incoming call for it's delay
  const throttledCallback = (...args: Parameters<Callback>) => {
    if (timeOutId) return;

    timeOutId = setTimeout(()=>{
      callback(...args)
      timeOutId = null
    }, delay)
  }

  const cancel = () => {
    if (!timeOutId) return 

    clearTimeout(timeOutId)
  }

  return [throttledCallback, cancel] as const
}

