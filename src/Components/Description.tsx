import React from "react";
import IconCart from "./Svg/IconCart";
import IconMinus from "./Svg/IconMinus";
import IconPlus from "./Svg/IconPlus";

export default function Description() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="max-w-xs">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="flex">
        <h1>${125}.00</h1>
        <div>50%</div>
        <h3 className="line-through">$250.00</h3>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <IconMinus />
          <h3>0</h3>
          <IconPlus />
        </div>
        <button className="flex align-center justify-center">
          <IconCart />
          <h3>Add to cart</h3>
        </button>
      </div>
    </div>
  );
}
