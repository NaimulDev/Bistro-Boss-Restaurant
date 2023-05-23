import React from "react";
import cover from "../../../assets/home/chef-service.jpg";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Section = () => {
  return (
    <section>
      <div className="relative my-8">
        <img src={cover} alt="" />
        <div className="absolute top-24 left-48  bg-white mx-auto text-center px-24 py-14">
          <h2>Bistro Boss</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum
            <br />
            deserunt ratione dolor officiis praesentium! Deserunt magni aperiam
            dolor eius dolore at, nihil iusto
            <br />
            ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>

      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
    </section>
  );
};

export default Section;
