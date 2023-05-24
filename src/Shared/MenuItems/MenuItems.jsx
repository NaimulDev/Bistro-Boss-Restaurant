import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const itemData = data.filter((item) => item.category === "popular");
        setMenu(itemData);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 my-14  gap-6">
      {menu.map((items) => (
        <MenuItem key={items._id} items={items}></MenuItem>
      ))}
    </div>
  );
};

export default MenuItems;
