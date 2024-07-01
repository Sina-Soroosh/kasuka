"use client";

import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";

function Header() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const hideMenu = (): void => {
    setIsShowMenu(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 py-1 bg-[#000000cc]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div
              className="text-white text-lg cursor-pointer md:hidden"
              onClick={() => setIsShowMenu(true)}
            >
              <IoIosMenu />
            </div>
            <div className="">
              <a href="" className="flex items-center text-white text-lg gap-0">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="w-full max-w-16"
                />
                KASUKA
              </a>
            </div>
            <div className="hidden md:block">
              <ul className="gap-2 flex">
                <li className="text-sm text-white hover:text-primary transition-colors">
                  <a href="#">خانه</a>
                </li>
                <li className="text-sm text-white hover:text-primary transition-colors">
                  <a href="#">درباره ی ما</a>
                </li>
                <li className="text-sm text-white hover:text-primary transition-colors">
                  <a href="#">خدمات</a>
                </li>
                <li className="text-sm text-white hover:text-primary transition-colors">
                  <a href="#">نمونه کارها</a>
                </li>
                <li className="text-sm text-white hover:text-primary transition-colors">
                  <a href="#">تیم</a>
                </li>
                <li className="text-sm text-white hover:text-primary transition-colors">
                  <a href="#">تماس با ما</a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="block border border-primary text-primary text-base px-3 py-2 rounded-lg hover:text-black hover:bg-primary transition-colors"
            >
              <span>شروع</span>
            </a>
          </div>
        </div>
      </header>

      <>
        <div
          className={`fixed inset-0 bg-[#0000008a] z-10 ${
            isShowMenu ? "block opacity-100" : "hidden opacity-0"
          }  md:opacity-0 md:block transition-all`}
          onClick={hideMenu}
        ></div>

        <div
          className={`fixed inset-y-0 w-72 max-w-[100vw] bg-[#000000cc] z-20 px-4 py-6  ${
            isShowMenu ? "right-0" : "-right-full"
          }
           transition-all md:-right-full`}
        >
          <div
            className="absolute top-3 left-2 text-white text-xl cursor-pointer"
            onClick={hideMenu}
          >
            <HiMiniXMark />
          </div>
          <ul className=" space-y-2">
            <li className="text-lg text-white hover:text-primary transition-colors">
              <a href="#">خانه</a>
            </li>
            <li className="text-lg text-white hover:text-primary transition-colors">
              <a href="#">درباره ی ما</a>
            </li>
            <li className="text-lg text-white hover:text-primary transition-colors">
              <a href="#">خدمات</a>
            </li>
            <li className="text-lg text-white hover:text-primary transition-colors">
              <a href="#">نمونه کارها</a>
            </li>
            <li className="text-lg text-white hover:text-primary transition-colors">
              <a href="#">تیم</a>
            </li>
            <li className="text-lg text-white hover:text-primary transition-colors">
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </div>
      </>
    </>
  );
}

export default Header;
