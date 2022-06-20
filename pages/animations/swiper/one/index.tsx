import type { NextPage } from 'next'
import React, {ReactNode, useEffect, useState} from 'react'
import {Swiper, Keyboard, Pagination, EffectCards} from 'swiper'
import "swiper/css";
import "swiper/css/effect-cards";

const AnimationSwiperPage: NextPage = () => {
  useEffect(()=>{
    const swiper = new Swiper(".mySwiper", {
      watchSlidesProgress: true,
      slidesPerView: 3,
    });

  },[])

  return (
    <div className="swiper mySwiper" css={{width: 400}}>
      <div className="swiper-wrapper" css={{height: 200}}>
        <div className="swiper-slide" css={{backgroundColor: "gray"}}>Slide 1</div>
        <div className="swiper-slide" css={{backgroundColor: "blue"}}>Slide 2</div>
        <div className="swiper-slide" css={{backgroundColor: "green"}}>Slide 3</div>
      </div>
    </div>
  )
}

// effect={"cards"}
        // grabCursor={true}
        // modules={[EffectCards]}

export default AnimationSwiperPage



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
