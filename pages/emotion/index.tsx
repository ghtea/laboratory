import type { NextPage } from 'next'
import React, {ReactNode, useState} from 'react'

const EmotionPage: NextPage = () => {

  return (
    <div>
      <CardOne css={{backgroundColor: "blue", ":hover": {color: "white"}}}/>
      <CardTwo/>
    </div>
  )
}

export default EmotionPage

type CardOneProp = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const CardOne: React.FunctionComponent = ({...rest}: CardOneProp) => {
  console.log("rest: ", rest); // TODO: remove

  return (
    <div css={{height: "100px", backgroundColor: "red", ":hover": {color: "blue"}}} {...rest}>
      card
    </div>
  )
}

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