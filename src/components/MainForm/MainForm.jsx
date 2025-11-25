import React from 'react'
import s from './MainForm.module.sass'
import Container from '../Container/Container'


const MainForm = () => {
  return (
    <div className={s.mainform}>
  <Container>
    <div className={s.wrap}>
      <h2 className={s.text}>stay upto date about our lattest offers</h2>
      <input className={s.adress} type="text" placeholder='Enter your email address' />
      <button className={s.btn}>Subscribe to Newsletter</button>
    </div>
 </Container>
 </div> 
 )
}


export default MainForm
