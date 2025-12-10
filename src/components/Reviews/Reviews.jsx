import React from 'react'
import s from "./Reviews.module.sass"
import Container from '../Container/Container'
import Title from '../Title/Title'
import Slider from 'react-slick'

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={s.reviews}>
        <Container>
            <div className={s.wrap}>
                <Title text="Our Happy Customers" align='left'/>
                <Slider {...settings}>
                    
                </Slider>
            </div>
        </Container>

    </div>
  )
}

export default Reviews