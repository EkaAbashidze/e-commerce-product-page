import React, { useState } from "react";
import IconNext from "./Svg/IconNext";
import IconPrevious from "./Svg/IconPrevous";
import tailwindConfig from "../tailwind.config";

export default function Slide() {
  const backgroundImages = tailwindConfig.theme?.extend?.backgroundImage;
  let keys: string[] = [];
  if (typeof backgroundImages === "object") {
    keys = Object.keys(backgroundImages);
  }

  const [background, setBackground] = React.useState(1);

  function goToNext() {
    setBackground(background + 1);
    if (background > keys.length - 1) {
      setBackground(1);
    }
  }

  function goToPrev() {
    setBackground(background - 1);
    if (background === 1) {
      setBackground(keys.length - 1);
    }
  }

  return (
    <div className="flex justify-center">
      <div
        className={`w-[375px] h-[300px] bg-${background} bg-cover bg-no-repeat bg-center relative`}
      >
        <div className="flex align-center justify-between w-full px-4 absolute top-[50%] translate-y-[-50%]">
          <div
            onClick={() => goToPrev()}
            className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer pr-[3px]"
          >
            <IconPrevious />
          </div>

          <div
            onClick={() => goToNext()}
            className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer pl-[3px]"
          >
            <IconNext />
          </div>
        </div>
      </div>
    </div>
  );
}
