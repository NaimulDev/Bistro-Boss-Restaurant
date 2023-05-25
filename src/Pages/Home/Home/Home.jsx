import React from "react";
import Banner from "../Banner";
import Category from "../Category/Category";
import Section from "../ExtraSection/Section";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Section></Section>
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
