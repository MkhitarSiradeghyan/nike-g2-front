import React from 'react'
import s from './OrderCard.module.sass'
import { GoTag } from "react-icons/go"
import { FaArrowRightLong } from "react-icons/fa6"


const OrderCard = () => {
    return (
        <div className={s.ordercard}>
            <h3 className={s.ordertext}>order summary</h3>
            <div className={s.subtutal}>
                <div className={s.text}>subtutal</div>
                <div className={s.monay}>$565</div>
                </div>
            <div className={s.discount}>
                <div className={s.text}>discount (-20%)</div>
                <div className={s.monay1}>-$113</div>
                </div>
            <div className={s.delivery}>
                <div className={s.text}>delivery fee</div>
                <div className={s.monay}>$15</div>
                </div>
                <hr />
                <div className={s.total}>
                    <h4 className={s.text1}>total</h4>
                    <div className={s.monay2}>$467</div>
                </div>
                <div className={s.inp}>
                    <div className={s.div}>
                        <input className={s.input} type="text"/>
                        <div className={s.icon}><GoTag />Add promo code</div>
                    </div>
                    <button className={s.btn}>Apply</button>
                </div>
               <button className={s.btn1}>Go to Checkout <FaArrowRightLong /></button>
              
        </div>
    )
}


export default OrderCard