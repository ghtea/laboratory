import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRefTestHook } from 'utils/ref-test-hook'

const RefPage: NextPage = () => {
  const result = useRefTestHook({keys: ["1", "2"]})
  const {key, keyRef} = useRefTestHook({keys: ["1", "2"]})

  useEffect(()=>{
    console.log("result: ", result.key); // TODO: remove 
  },[result])

  useEffect(()=>{
    console.log("key: ", key); // TODO: remove 
    console.log("key from ref", keyRef.current)
  },[key, keyRef])

  useEffect(()=>{
    console.log("key from ref: ", keyRef.current); // TODO: remove 
  },[keyRef])

  return (
    <div>
    </div>
  )
}

export default RefPage