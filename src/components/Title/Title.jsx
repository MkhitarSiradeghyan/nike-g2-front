import React from 'react'
import s from "./Title.module.sass"

const Title = ({text, align = "center"}) => {
  return (
    <h2 className={s.title} style={{textAlign: align}}>{text}</h2>
  )
}

export default Title