import React from "react";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ items }) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, recipe, price } = items;
  return (
    <div className="flex gap-5">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[118px] h-[104px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-2xl mb-3">{name} --------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
