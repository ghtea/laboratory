import type { NextPage } from 'next'
import React, {forwardRef, useCallback, useRef, useImperativeHandle} from 'react'

const RefImperativePage: NextPage = () => {
  const handlClickInputOne = useCallback(()=>{
    console.log("click!")
  },[])

  const inputOneRef = useRef<InputOneRef>(null)

  return (
    <div>
      <InputOne ref={inputOneRef} onClick={handlClickInputOne}/>
    </div>
  )
}

export default RefImperativePage


// InputOne
type InputOneProps = {
  onClick: () => void
}

type InputOneRef = {
  customFocus: () => void
}

const InputOne = forwardRef<InputOneRef, InputOneProps>(({
  onClick
}, ref) => {

  useImperativeHandle(ref, () => ({
    customFocus: () => {
      console.log("yo")
    }
  }));

  return (
    <input onClick={onClick}>input</input>
  )
})

InputOne.displayName = "InputOne"

// WIP: I want to merge refs but couldnt succeed yet
// // InputTwo
// type InputTwoProps = {
//   onClick: () => void
// }

// type InputTwoRef = HTMLInputElement & {
//   customFocus: () => void
// }

// const InputTwo = forwardRef<InputTwoRef, InputTwoProps>(({
//   onClick
// }, ref) => {
//   const elementRef = useRef<HTMLInputElement>(null)

//   useImperativeHandle(ref, () => ({
//     customFocus: () => {
//       elementRef.current?.focus()
//     },
//     ...(elementRef.current || {}),
//   }));

//   return (
//     <input ref={elementRef} onClick={onClick}>input</input>
//   )
// })

// InputTwo.displayName = "InputTwo"