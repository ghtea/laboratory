import type { NextPage } from 'next'
import React, {ReactNode} from 'react'

const EmotionPage: NextPage = () => {

  return (
    <div>
      <Card css={{backgroundColor: "blue"}}/>
    </div>
  )
}

export default EmotionPage

type CardProp = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Card: React.FunctionComponent = ({...rest}: CardProp) => {
  return (
    <div css={{height: "100px", backgroundColor: "red"}} {...rest}>
      card
    </div>
  )
}