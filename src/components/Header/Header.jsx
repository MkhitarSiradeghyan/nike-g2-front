import React from 'react'
import s from "./Header.module.sass"
import Logo from '../Logo/Logo'
import Container from '../Container/Container'

const Header = () => {
  return (
    <div className={s.header}>
        <Container>
          <div className={s.wrap}>
            <Logo/>
            <nav className={s.nav}></nav>
          </div>
        </Container>
      
    </div>
  )
}

export default Header