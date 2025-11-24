import React from 'react'
import s from './MainForm.module.sass'
import Container from '../Container/Container'

const MainForm = () => {
  return (
    <div className={s.main_form}>
        <Container>
            <div className={s.wrap}>
                <div className={s.text}>Stay upto date about our latest offers</div>
                <form className={s.form}>
                    <input className={s.btn}  type="text" placeholder='✉ Enter your email address'/>
                    <button className={s.btn} >Subscribe to Newsletter</button>
                </form>


            </div>
        </Container>
    </div>
  )
}

export default MainForm
