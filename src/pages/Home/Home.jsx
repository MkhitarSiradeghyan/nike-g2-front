import React from "react";
import Hero from "../../components/Hero/Hero";
import Brands from "../../components/Brands/Brands";
import Wrap from "../../components/Wrap/Wrap";
import ShopCard from "../../components/ShopCard/ShopCard";
import Dress from "../../components/Dress/Dress";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Wrap title="New Arrivals">
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
      </Wrap>
      <Wrap title="Top Selling">
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
      </Wrap>
      <Dress/>
    </>
  );
};

export default Home;
