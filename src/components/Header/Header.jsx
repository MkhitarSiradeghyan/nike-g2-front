import React from 'react'
import s from "./Header.module.sass"
import Logo from '../Logo/Logo'
import Container from '../Container/Container'
import { NavLink } from 'react-router'
import { IoSearch } from 'react-icons/io5'
import { PiShoppingCartSimpleBold, PiUserCircleBold } from 'react-icons/pi'

const Header = () => {
  return (
    <div className={s.header}>
        <Container>
          <div className={s.wrap}>
            <Logo/>
            <nav className={s.nav}>
              <NavLink className={s.link}>Shop</NavLink>
              <NavLink className={s.link}>On Sale</NavLink>
              <NavLink className={s.link}>New Arrivals</NavLink>
              <NavLink className={s.link}>Brands</NavLink>
            </nav>
            <form className={s.form}>
              <input type="text" className={s.input} placeholder=""/>
              <div className={s.placeholder}>
                <IoSearch className={s.icon}/>
                <div className={s.p_text}>Search for products...</div>
              </div>
            </form>
            <div className={s.others}>
              <div className={s.other_item}>
                <PiShoppingCartSimpleBold />
              </div>
              <div className={s.other_item}>
                <PiUserCircleBold />
              </div>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Header