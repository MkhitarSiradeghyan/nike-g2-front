import React, { useState } from "react";
import s from "./Banner.module.sass";
import { RxCross2 } from "react-icons/rx";
import Container from "../Container/Container";
import { Link } from "react-router";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen)
    return (
      <div className={s.banner}>
        <Container>
          <div className={s.wrap}>
            <p className={s.text}>
              <span>Sign up and get 20% off to your first order.</span>
              <Link to="#" className={s.link}>
                Sign Up Now
              </Link>
            </p>
            <button onClick={() => setIsOpen(false)} className={s.cross}>
              <RxCross2 />
            </button>
          </div>
        </Container>
      </div>
    );
};

export default Banner;
