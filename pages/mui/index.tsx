import { Box, SxProps, Theme } from '@mui/system'
import type { NextPage } from 'next'
import React, {ReactNode, useState} from 'react'

const MuiPage: NextPage = () => {

  return (
    <Box>
      <CardOne sx={{backgroundColor: "blue", ":hover": {color: "white"}}}/>
      <CardTwo/>
      <Box sx={{}} className='one' className='two' className='three'></Box>
    </Box>
  )
}

export default MuiPage

type CardOneProp = {sx?: SxProps<Theme>}
const CardOne = ({...rest}: CardOneProp) => {
  console.log("rest: ", rest); // TODO: remove

  return (
    <Box sx={{height: "100px", backgroundColor: "red", ":hover": {color: "blue"}}} {...rest}  className="test" >
      card
    </Box>
  )
}
// 컴파일 하는 시점에서 sx 들을 클래스로 변경
// 이때 같은 prop으로서 앞에 className 이 있다면 sx 와 병함? (<- className를 직접 넣을때 sx의 앞에 나두면 사라진다)

type CardTwoProp = {sx?: SxProps<Theme>}
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