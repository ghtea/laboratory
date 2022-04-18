import { useEffect, useMemo, useRef, useState } from "react"
import { useInterval } from "utils/interval"

export type RefTestHookOptions = {
  onChange?: () => void
  keys: string[]
}

export type RefTestHookResult = {
  key: string
}

export const useRefTestHook = ({
  onChange,
  keys
}: RefTestHookOptions) => {
  const [randomKey, setRandomKey] = useState("")

  const joinedKeyRef = useRef("")

  useInterval(()=>{
    setRandomKey(Math.random().toString().slice(0,3))
  }, 1000)

  const joinedKey = useMemo(()=>{
    return [randomKey, ...keys].join("-")
  },[keys, randomKey])

  useEffect(()=>{
    joinedKeyRef.current = joinedKey
  },[joinedKey])

  const result = useMemo(()=>({
    key: joinedKey,
    keyRef: joinedKeyRef, 
  }),[joinedKey])

  return result
}