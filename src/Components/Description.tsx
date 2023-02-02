import React, { useState, useEffect } from "react";
import IconCart from "./Svg/IconCart";
import IconMinus from "./Svg/IconMinus";
import IconPlus from "./Svg/IconPlus";

export default function Description() {
  const [count, setCount] = React.useState(0);
  const [price, setPrice] = React.useState(125);
  const [oldPrice, setOldPrice] = React.useState(250);

  function addItems() {
    setCount(count + 1);
  }

  function removeItems() {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  }

  useEffect(() => {
    setPrice(125 * count);
    setOldPrice(250 * count);
    if (count === 0) {
      setPrice(125);
      setOldPrice(250);
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center">
      <div>
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="w-326">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="w-326 flex items-start justify-between">
        <div className="flex">
          <h1>${price}.00</h1>
          <div>50%</div>
        </div>
        <h3 className="line-through">${oldPrice}.00</h3>
      </div>

      <div className="w-326">
        <div className="w-full flex items-center justify-between">
          <IconMinus
            OnClick={() => {
              removeItems();
            }}
          />
          <h3>{count}</h3>
          <IconPlus
            OnClick={() => {
              addItems();
            }}
          />
        </div>
        <button className="w-full flex align-center justify-center">
          <IconCart />
          <h3>Add to cart</h3>
        </button>
      </div>
    </div>
  );
}
