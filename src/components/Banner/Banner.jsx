import React, { useState } from "react";
import s from "./Banner.module.sass";
import { RxCross2 } from "react-icons/rx";
import Container from "../Container/Container";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen)
    return (
      <div className={s.background}>
        <Container>
          <span className={s.text}>
            Sign up and get 20% off to your first order.
          </span>
          <a className={s.link} href="">
            Sign Up Now
          </a>
          <div className={s.cross}>
            <button onClick={() => setIsOpen(false)} className={s.cross}>
              <RxCross2 />
            </button>
          </div>
        </Container>
      </div>
    );
};

export default Banner;
