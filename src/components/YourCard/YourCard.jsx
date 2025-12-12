import React from 'react'
import s from "./YourCard.module.sass"
import Container from '../Container/Container'
import shopcard_1 from "../../assets/img/card_img_ex.png"
import { FaRegTrashAlt } from "react-icons/fa";


const YourCard = () => {
  return (
    <section>
        <Container>
            <h2 className={s.title}>Your Card</h2>
                <div className={s.firstcard}>
                    <img src={shopcard_1}  className={s.img} alt=""/>
                    <div className={s.text}>
                          <div className={s.text1}>
                            <div className={s.color}>Size:</div>
                            <div className={s.description}>Large</div>
                        </div>
                        <div className={s.text2}>
                            <div className={s.color}>Color:</div>
                            <div className={s.description}>White</div>
                        </div>
                    </div>
                    <h3 className={s.h3}>Gradient Graphic T-shirt</h3>
                    <div className={s.price}>$145</div>
                    <div className={s.icons}>
                        <div className={s.trash}><FaRegTrashAlt /></div>
                    </div>
                </div>
        </Container>
    </section>
  )
}

export default YourCard