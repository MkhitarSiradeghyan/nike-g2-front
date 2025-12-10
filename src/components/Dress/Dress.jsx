import React from 'react'
import s from "./Dress.module.sass"
import Container from '../Container/Container'
import Title from '../Title/Title'
import img1 from "../../assets/img/style_1.png"
import img2 from "../../assets/img/style_2.png"
import img3 from "../../assets/img/style_3.png"
import img4 from "../../assets/img/style_4.png"

const Dress = () => {
  return (
    <div className={s.dress}>
        <Container>
            <div className={s.wrap}>
                <Title text="Browse By Dress Style"/>
                <div className={s.grid}>
                    <div className={s.item} style={{backgroundImage: `url(${img1})`}}>
                        <h3 className={s.title}>Casual</h3>
                    </div>
                    <div className={s.item} style={{backgroundImage: `url(${img2})`}}>
                        <h3 className={s.title}>Formal</h3>
                    </div>
                    <div className={s.item} style={{backgroundImage: `url(${img3})`}}>
                        <h3 className={s.title}>Party</h3>
                    </div>
                    <div className={s.item} style={{backgroundImage: `url(${img4})`}}>
                        <h3 className={s.title}>Gym</h3>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Dress