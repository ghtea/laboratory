import {Box} from "@mui/system"
import { NextPage } from "next";
import React, {useCallback, MouseEventHandler, useEffect, useRef, ReactNode, useState} from "react"

const ModalPage: NextPage = () => {
  const [isOpenedModal, setIsOpendModal] = useState(false)

  const handleClickButton = useCallback(()=>{
    setIsOpendModal(true)
  },[])

  const handleCloseModal = useCallback(()=>{
    setIsOpendModal(false)
  },[])

  return (
    <div>
      <button onClick={handleClickButton}>show modal</button>
      {isOpenedModal ? <Modal onClose={handleCloseModal}/> : null}
    </div>
  )
}

export default ModalPage

export type ModalProps = {
  onClose: ()=>void
}

export const Modal = ({
  onClose,
}: ModalProps) => {
  const handleClickOutside: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    onClose()
  },[onClose])

  const handleClickClose: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    onClose()
  },[onClose])

  const handleClickModal: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    event.stopPropagation()
  },[])

  return (
    <Box 
      onClick={handleClickOutside}
      sx={{
        position: "fixed",
        display: "flex", 
        flexDirection:"column", 
        justifyContent: "center",
        alignItems: "center", 
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Box 
        onClick={handleClickModal}
        sx={{
          display: "flex", 
          flexDirection:"column", 
          alignItems: "center",
          backgroundColor: "white",
          width: "100%",
          maxWidth: "540px",
          height: "auto",
          borderRadius: "12px",
          padding: 3
        }}
      >
        <Box sx={{
          width: 1, 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center", 
          marginBottom: 4,
        }}>
          <Box sx={{fontSize: "1.5rem", fontWeight: "bold"}}>
            title
          </Box>
          <Box onClick={handleClickClose} sx={{cursor: "pointer"}}>
            close
          </Box>
        </Box>
        <Box 
          sx={{
            width: 1,
            flexGrow: 1, 
            flexShrink: 1,
            marginBottom: 4
          }}
        >
          content
        </Box>
      </Box>
    </Box>
  )
}