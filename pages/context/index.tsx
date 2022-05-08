import type { NextPage } from 'next'
import React, { memo } from 'react'
import { useCounterContext } from 'utils/counter'

const ContextPage: NextPage = () => {
  const {increase, decrease} = useCounterContext()

  return (
    <div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <ComponentOne/>
      <ComponentTwo/>
      <ComponentThree/>
    </div>
  )
}

export default ContextPage

const ComponentOne = () => {
  console.log("render ComponentOne")

  return (<div>one</div>)
}

const ComponentTwo = () => {
  const {count} = useCounterContext()

  console.log("render ComponentTwo")

  return (<div>two</div>)
}

const ComponentThree = memo(() => {
  console.log("render ComponentThree")

  return (<div>one</div>)
})

ComponentThree.displayName = "ComponentThree"
