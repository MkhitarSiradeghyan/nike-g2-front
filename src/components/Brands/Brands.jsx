import React from 'react'
import s from "./Brands.module.sass"
import brand_1 from "../../assets/img/brand_1.png"
import brand_2 from "../../assets/img/brand_2.png"
import brand_3 from "../../assets/img/brand_3.png"
import brand_4 from "../../assets/img/brand_4.png"
import brand_5 from "../../assets/img/brand_5.png"
import Container from '../Container/Container'

const Brands = () => {
  return (
  <div className={s.all}>
      <Container>
         <div className={s.brand}>
      <img src={brand_1} alt="" />
      <img src={brand_2} alt="" />
      <img src={brand_3} alt="" />
      <img src={brand_4} alt="" />
      <img src={brand_5} alt="" />
          </div>
      </Container>
  </div>
  )
}

export default Brands