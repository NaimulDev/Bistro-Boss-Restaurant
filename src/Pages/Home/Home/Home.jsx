import React from "react";
import Banner from "../Banner";
import Category from "../Category/Category";
import Section from "../ExtraSection/Section";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Section></Section>
      <PopularMenu />
    </div>
  );
};

export default Home;
