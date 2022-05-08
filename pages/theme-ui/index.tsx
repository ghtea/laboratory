import { Box, Theme, ThemeUIStyleObject } from 'theme-ui'
import type { NextPage } from 'next'
import React, {ReactNode, useState} from 'react'

const ThemeUiPage: NextPage = () => {

  return (
    <Box>
      <CardOne sx={{backgroundColor: "blue", ":hover": {color: "white"}}}/>
      <CardTwo/>
      <CardThree customSx={{backgroundColor: "blue", ":hover": {color: "white"}}}/>
    </Box>
  )
}

export default ThemeUiPage

type CardOneProp = {sx?: ThemeUIStyleObject}
const CardOne = ({...rest}: CardOneProp) => {
  console.log("rest: ", rest); // TODO: remove

  return (
    <Box sx={{height: "100px", backgroundColor: "red", ":hover": {color: "blue", backgroundColor: "yellow"}}} {...rest}>
      card
    </Box>
  )
}

type CardTwoProp = {sx?: ThemeUIStyleObject}
const CardTwo = ({...rest}: CardTwoProp) => {
  const [disabled, setDisabled] = useState(false)

  return (
    <Box 
    onClick={()=>setDisabled(prev=>!prev)}
    sx={{height: "100px", backgroundColor: disabled ? "red" : "green", ":hover": {color: "blue"}}} {...rest}>
      card
    </Box>
  )
}

type CardThreeProp = {customSx: ThemeUIStyleObject}
const CardThree = ({customSx, ...rest}: CardThreeProp) => {
  console.log("rest: ", rest); // TODO: remove

  return (
    <Box sx={{height: "100px", backgroundColor: "red", ":hover": {color: "blue", backgroundColor: "yellow"}, ...customSx}}>
      card
    </Box>
  )
}

// ref: https://jhpa.tistory.com/m/16