import React from 'react'
import s from './ShopWindow.module.sass'
import img from "../../assets/img/card_img_ex.png"
import Container from '../Container/Container'
import { IoIosStar } from "react-icons/io"
import { TiStarHalf } from "react-icons/ti"

const ShopWindow = () => {
    return (
        <div className={s.shopwindow}>
            <Container> 
            <div className={s.wrap}>
                <div className={s.grid}>
                    <span className={s.img1}><img src={img} alt="img1" /></span>
                    <span className={s.img2}><img src={img} alt="img" /></span>
                    <span className={s.img3}><img src={img} alt="img" /></span>
                    <span className={s.img4}><img src={img} alt="img" /></span>
                </div>
                <div className={s.menu}>
                    <h2 className={s.title}>one life graphic t-shirt</h2>
                    <div className={s.percent}>
                                    <div className={s.star}><IoIosStar/><IoIosStar/><IoIosStar/><TiStarHalf /></div>
                                    
                                    <div className={s.number}> <span className={s.star_percent}>3.5/</span><span className={s.five}>5</span></div>
                                </div>
                    <div className={s.prices}>
                                    <div className={s.newprice}>$260</div>
                                    <div className={s.oldprice}>$300
                                        
                                    </div>
                                    <div className={s.discount}>-40%</div>
                                </div>
                                <p className={s.text}>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                                <hr className={s.line}/>
                                   <div className={s.colors}>
                                    <h4 className={s.title2}>select colors</h4>
                                    <div className={`${s.box} ${s.box1}`}></div>
                                    <div className={`${s.box} ${s.box2}`}></div>
                                    <div className={`${s.box} ${s.box3}`}></div>
                                    </div>            
                </div>      
            </div>
            </Container>
        </div>
    )
}


export default ShopWindow