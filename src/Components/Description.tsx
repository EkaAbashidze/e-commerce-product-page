import React, { useState, useEffect } from "react";
import IconCart from "./Svg/IconCart";
import IconMinus from "./Svg/IconMinus";
import IconPlus from "./Svg/IconPlus";

interface Props {
  fillColor: string;
}

const Description: React.FC<Props> = ({ fillColor }) => {
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
    <div className="flex flex-col items-center font-Kumbh">
      <div>
        <h3 className="text-orange uppercase text-xs pt-6 pb-5 leading-[15px] tracking-widest font-bold">
          Sneaker Company
        </h3>
        <h1 className="font-bold text-[28px] max-w-[326px] leading-8 ">
          Fall Limited Edition Sneakers
        </h1>
        <p className="w-326 pt-[15px] pb-7 text-darkgrayblue font-normal text-[15px] leading-[25px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="w-326 flex items-center justify-between font-bold">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-[28px] leading-[35px]">${price}.00</h1>
          <div className="bg-paleorange text-orange w-[51px] h-[27px] rounded-md flex items-center justify-center text-base leading-20px ">
            50%
          </div>
        </div>
        <h3 className="line-through text-grayblue">${oldPrice}.00</h3>
      </div>

      <div className="w-326">
        <div className="w-full flex items-center justify-between rounded-[10px] bg-lightgrayblue h-14 mt-[27px] mb-4 px-6">
          <IconMinus
            OnClick={() => {
              removeItems();
            }}
          />
          <h3 className="font-bold text-base leading-5">{count}</h3>
          <IconPlus
            OnClick={() => {
              addItems();
            }}
          />
        </div>
        <button className="w-full flex items-center justify-center text-white bg-orange h-14 rounded-[10px] gap-x-4 shadow-[0_20px_50px_-20px_rgba(255,125,55,1)]">
          <IconCart fillColor={fillColor} />
          <h3 className="font-bold text-base leading-5">Add to cart</h3>
        </button>
      </div>
    </div>
  );
};

export default Description;
