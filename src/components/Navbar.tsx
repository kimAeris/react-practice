"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="relative z-10 w-full bg-orange-500 text-white">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20 ">
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>

        {/* small보다 클 때 hidden */}
        <div className="text-2xl sm:hidden">
          {menu === false ? (
            <button onClick={handleMenu}> + </button>
          ) : (
            <button onClick={handleMenu}> - </button>
          )}
        </div>

        {/* small 보다 클 때 block */}
        <div className="hidden sm:block">
          <NavItem />
        </div>

        {/* small보다 클 때 hidden */}
        <div className="block sm:hidden">
          {/* 사이즈에 따른 분기처리를 위한 mobile props 전달 */}
          {menu === false ? null : <NavItem mobile />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
