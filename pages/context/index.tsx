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
      <ComponentFour/>
    </div>
  )
}

export default ContextPage

const ComponentOne = () => {
  console.log("ONE: basic child which doesn't use useContext")

  return (<div>one</div>)
}

const ComponentTwo = () => {
  const {count} = useCounterContext()

  console.log("TWO: use updated context state")

  return (<div>two</div>)
}

const ComponentThree = memo(() => {
  console.log("THREE: use memo, not using useContext")

  return (<div>trhhe</div>)
})

ComponentThree.displayName = "ComponentThree"

const ComponentFour = memo(() => {
  const {increase} = useCounterContext()

  console.log("FOUR: use non-updated context state")

  return (<div>four</div>)
})

ComponentFour.displayName = "ComponentFour"


