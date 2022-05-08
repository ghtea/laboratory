import type { NextPage } from 'next'
import React, {forwardRef, memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

const MemoRefPage: NextPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handlClickButton = useCallback(()=>{
    console.log("click!")
  },[])

  return (
    <div>
      <MemoButton ref={buttonRef} onClick={handlClickButton}/>
    </div>
  )
}

export default MemoRefPage


type MemoButtonProps = {
  onClick: () => void
}

const MemoButton = memo(forwardRef<HTMLButtonElement, MemoButtonProps>(({
  onClick
}, ref) => {

  return (
    <button ref={ref} onClick={onClick}>button</button>
  )
}))

MemoButton.displayName = "MemoButton"