import React from 'react'
import Container from '../Container/Container'
import s from "./Wrap.module.sass"

const Wrap = ({children,title}) => {
    return (
    <section>
    <Container>
        <h2 className={s.title}>{title}</h2>
        <div className={s.wrap}>{children}</div>
    </Container>
    </section>
  )
}

export default Wrap