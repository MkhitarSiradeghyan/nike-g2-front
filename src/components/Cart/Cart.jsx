import React from "react";
import s from "./Cart.module.sass";
import i from "../../assets/img/card_img_ex.png";
import Container from "../Container/Container";
import { BiDollar } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => (
  <Container>
    <div className={s.border}>
      <div className={s.section}>
        <img className={s.img} src={i} alt="" />
        <div className={s.characters}>
          <span className={s.name}>Gradient Graphic T-shirt</span>
          <span className={s.size}>
            Size:
            <span className={s.large}>Large</span>
          </span>
          <span className={s.color}>
            Color:
            <span className={s.white}>White</span>
          </span>
          <span className={s.price}>
            <span className={s.icon}>
              <BiDollar />
            </span>
            <div className={s.money}>145</div>
          </span>
        </div>
        <div className={s.right}>
          <div className={s.delete}>
            <FaTrashAlt />
          </div>
          <div className={s.btn}></div>
        </div>
      </div>
    </div>
  </Container>
);

export default Cart;
