import type { NextPage } from 'next'
import React, {ReactNode, useState} from 'react'
import styles from "./index.module.scss"

const EmotionPage: NextPage = () => {

  return (
    <div>
      <CardOne css={{backgroundColor: "blue", ":hover": {color: "white"}}}/>
      <CardTwo/>
      <CardFour css={{backgroundColor: "blue", ":hover": {color: "white"}}}/>
      <div className='ee' css={{}}></div>
    </div>
  )
}

export default EmotionPage

type CardOneProp = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const CardOne: React.FunctionComponent = ({...rest}: CardOneProp) => {
  console.log("rest: ", rest); // TODO: remove
console.log("styles.test", styles.test)
  return (
    <div className={styles.test} css={{height: "100px", backgroundColor: "red", ":hover": {color: "blue"}}} {...rest} >
      card
    </div>
  )
}
// WIP:  핵심!
// a) css -> class, b) rest의 className, c) 직접적인 className 이 처리되는 방식
// a b c => a, c
// a b => a+b
// c a b => a+b

// className 이 class 가 되는 시점은 ?
// css 가 className이 되는 시점은 ? babel ?


// position of className={styles.test} changes result

type CardTwoProp = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const CardTwo: React.FunctionComponent = ({...rest}: CardTwoProp) => {
  const [disabled, setDisabled] = useState(false)

  return (
    <div 
    onClick={()=>setDisabled(prev=>!prev)}
    css={{height: "100px", backgroundColor: disabled ? "red" : "green", ":hover": {color: "blue"}}} {...rest}>
      card
    </div>
  )
}

type CardFourProp = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const CardFour: React.FunctionComponent = ({...rest}: CardFourProp) => {
  const [disabled, setDisabled] = useState(false)

  return (
    <div 
    onClick={()=>setDisabled(prev=>!prev)}
    css={{height: "100px", backgroundColor: disabled ? "red" : "green", ":hover": {color: "blue"}}} 
    className={"test"}
    {...rest}>
      card
    </div>
  )
}

// ref: https://medium.com/@nikhilsharmarockstar21/emotionjs-under-the-hood-18dbe6078ae2