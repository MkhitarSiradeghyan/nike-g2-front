import React from 'react'
import s from './Comments.module.sass'
import Container from '../Container/Container'
import { GiSettingsKnobs } from "react-icons/gi"
import { FaChevronDown } from "react-icons/fa6"

const Comments = () => {
    return (
        <div className={s.comments}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.titles}>
                        <button className={`${s.titles} ${s.title1}`}>product details</button>
                        <button className={`${s.titles} ${s.title2}`}>rating & reviews</button>
                        <button className={`${s.titles} ${s.title3}`}>FAQs</button>
                    </div>
                    <div className={s.settings}>
                        <div className={s.div}>
                        <h2 className={s.review}>all reviews</h2>
                        <p className={s.text}>(451)</p>
                        </div>
                        <div className={s.buttons}>
                            <button className={s.icon}><GiSettingsKnobs /></button>
                            <div className={s.sellect}>
                                <button className={`${s.btn} ${s.btn1}`}>Latest <FaChevronDown /> </button>
                                <div className={`${s.sellect} ${s.sellect1}`}></div>
                                <div className={`${s.sellect} ${s.sellect2}`}></div>
                                <div className={`${s.sellect} ${s.sellect3}`}></div>
                            </div>
                            <button className={`${s.btn} ${s.btn2}`}>Write a Revievs </button>
                        </div>
                    </div>
                    <div className={s.grid}>
                        <div className={`${s.card} ${s.card1}`}>card1</div>
                        <div className={`${s.card} ${s.card2}`}>card2</div>
                        <div className={`${s.card} ${s.card3}`}>card3</div>
                        <div className={`${s.card} ${s.card4}`}>card4</div>
                        <div className={`${s.card} ${s.card5}`}>card5</div>
                        <div className={`${s.card} ${s.card6}`}>card6</div>
                    </div>
                    <button className={`${s.btn} ${s.btn3}`}>Load More Reviews</button>
                </div>
            </Container>
        </div>
    )
}


export default Comments
