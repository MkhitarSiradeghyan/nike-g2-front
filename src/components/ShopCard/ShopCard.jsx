import React from 'react'
import s from './ShopCard.module.sass'
import card_img from "../../assets/img/card_img_ex.png"
import { IoIosStar } from "react-icons/io"
import { TiStarHalf } from "react-icons/ti"



const ShopCard = () => {
    return (
        <div className={s.shopcard}>
            <img  src={card_img} alt="card" />
            <h3 className={s.shopname}>skinny fit jeans</h3>
            <div className={s.percent}>
                <div className={s.star}><IoIosStar/><IoIosStar/><IoIosStar/><TiStarHalf /></div>
                
                <div className={s.number}> 3.5/5</div>
            </div>
            <div className={s.prices}>
                <div className={s.newprice}>100$</div>
                <div className={s.oldprice}>260$
                    <div className={s.line}></div>
                </div>
                <div className={s.discount}>-20%</div>
            </div>
        </div>
    )
}


export default ShopCard