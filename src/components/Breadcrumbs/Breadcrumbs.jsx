import React from 'react'
import s from "./Breadcrumbs.module.sass"
import Container from '../Container/Container'
import { SlArrowRight } from "react-icons/sl";

const Breadcrumbs = () => {
  return (
    <section>
        <Container>
            <div className={s.different}>
                <div className={s.breadcrumb}>Home</div>
                    <div className={s.icons}><SlArrowRight /></div>
                <div className={s.breadcrumb}>Shop</div>
                    <div className={s.icons}><SlArrowRight /></div>
                <div className={s.breadcrumb}>Men</div>
                    <div className={s.icons}> <SlArrowRight /></div>   
                <div className={s.shirt}>T-shirt</div>
            </div>
        </Container>
    </section>
  )
}

export default Breadcrumbs