import React from "react";
import Container from "../Container/Container";
import s from "./Wrap.module.sass";
import Title from "../Title/Title";

const Wrap = ({ children, title }) => {
  return (
    <section className={s.main}>
      <Container>
        <div className={s.wrap}>
          <Title text={title}/>
          <div className={s.list}>{children}</div>
          <button className={s.button}>View All</button>
        </div>
      </Container>
    </section>
  );
};

export default Wrap;
