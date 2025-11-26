import React from 'react'
import s from './Reviewcard.module.sass'
import Container from '../Container/Container'
import { IoIosStar } from "react-icons/io"
import { FaCheckCircle } from "react-icons/fa"


const Reviewcard = () => {
    return (
       <Container>
        <div className={s.border}>
            <div className={s.stars}><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
            <div className={s.user}>
                <div className={s.name}>Sarah M.</div>
                <div className={s.logo}><FaCheckCircle /></div></div>
            <span className={s.text}>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</span>
        </div>
       </Container>
    )
}


export default Reviewcard