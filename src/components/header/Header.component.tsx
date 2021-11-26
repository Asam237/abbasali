import React from "react";
import { HEADER_NAV } from "../../assets/data/header.data";
import { LANGUAGES } from "../../constants/languages";
import menu from "../../assets/img/menu.png";

export const Header = () => {
  return (
    <header className="site__header sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-4 md:px-20">
          <div className="site__header-title">
            <h1
              className="text-2xl md:text-3xl"
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "#00A78E",
              }}
            >
              {LANGUAGES.home.title}
            </h1>
          </div>
          <div className="site__header-nav">
            <ul className="flex">
              <a className="flex md:hidden w-10 h-7" href="#">
                <img src={menu} alt="" />
              </a>
              {HEADER_NAV.map((item: any) => (
                <li className="hidden md:flex ml-10">
                  <a
                    style={{
                      color: "#293651",
                      fontFamily: "'Mukta', sans-serif",
                    }}
                    className="font-medium hover:underline"
                    href={item.id}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
