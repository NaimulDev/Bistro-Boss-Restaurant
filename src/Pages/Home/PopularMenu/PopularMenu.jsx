import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <MenuItems></MenuItems>
    </section>
  );
};

export default PopularMenu;
