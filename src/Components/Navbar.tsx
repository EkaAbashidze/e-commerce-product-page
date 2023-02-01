import React from "react";
import IconCart from "./Svg/IconCart";
import IconMenu from "./Svg/IconMenu";
import Logo from "./Svg/Logo";
import Avatar from "../images/image-avatar.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 h-[68px] border-b-2 border-b-black pb-7 pt-[20px]">
      <div className="flex items-end gap-x-4">
        <IconMenu />
        <Logo />
      </div>

      <div className="flex items-center gap-x-[22px]">
        <IconCart />
        <img className="h-6 w-6" src={Avatar} alt="" />
      </div>
    </div>
  );
}
