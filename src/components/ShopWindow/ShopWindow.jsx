import React from 'react'
import s from './ShopWindow.module.sass'
import img from "../../assets/img/card_img_ex.png"
import Container from '../Container/Container'
import { IoIosStar } from "react-icons/io"
import { TiStarHalf } from "react-icons/ti"
import { TiTick } from "react-icons/ti"

const ShopWindow = () => {
    return (
        <div className={s.shopwindow}>
            <Container> 
            <div className={s.wrap}>
                <div className={s.grid}>
                    <div className={`${s.img} ${s.img1}`}><img src={img} alt="img" /></div>
                    <div className={`${s.img} ${s.img2}`}><img src={img} alt="img" /></div>
                    <div className={`${s.img} ${s.img3}`}><img src={img} alt="img" /></div>
                    <div className={`${s.img} ${s.img4}`}><img src={img} alt="img" /></div>
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
                                   <div className={s.div}>
                                    <button className={`${s.box} ${s.box1}`}><TiTick /></button>
                                    <button className={`${s.box} ${s.box2}`}></button>
                                    <button className={`${s.box} ${s.box3}`}></button>
                                    </div>
                                </div>        
                                <hr className={s.line}/>    
                                <div className={s.choose}>
                                    <h4 className={s.title2}>choose size</h4>
                                    <div className={s.sizes}>
                                        <button className={`${s.size} ${s.small}`}>small</button>
                                        <button className={`${s.size} ${s.medium}`}>medium</button>
                                        <button className={`${s.size} ${s.large}`}>large</button>
                                        <button className={`${s.size} ${s.xlarge}`}>x-large</button>
                                        
                                    </div>
                                </div>
                                <hr className={s.line}/>
                                <div className={s.btn}>
                                    <div className={s.numbers}> 
                                        <button className={s.minus}>-</button>
                                        <span>1</span>
                                        <button className={s.plus}>+</button>
                                    </div>
                                    <button className={s.cart}>Add to Cart</button>
                                </div>

                </div>      
            </div>
            </Container>
        </div>
    )
}


export default ShopWindow