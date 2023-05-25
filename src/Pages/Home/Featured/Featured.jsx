import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import cover from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 py-20 ">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb- pt-12 px-36">
        <div className=" ">
          <img className="w-[448px]" src={cover} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            <br />
            voluptate facere, deserunt dolores maiores quod nobis quas
            <br />
            quasi. Eaque repellat recusandae ad laudantium tempore
            <br />
            consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline uppercase text-white mt-5 border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
