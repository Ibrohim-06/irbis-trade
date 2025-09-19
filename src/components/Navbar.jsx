import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PATH } from "../hooks/PATH";
import MenuDrawer from "./MenuDrawer";
export const navbarList = [
  {
    id: 1,
    title: "О нас",
    path: PATH.about,
  },
  {
    id: 2,
    title: "Наши услуги",
    path: PATH.services,
  },
  {
    id: 3,
    title: "Партнерство",
    path: PATH.partnership,
  },
  {
    id: 4,
    title: "Наши продукции",
    path: PATH.products,
  },
  {
    id: 5,
    title: "Новости",
    path: PATH.news,
  },
  {
    id: 6,
    title: "Контакты",
    path: PATH.contact,
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;
  return (
    <nav
      className={`top-0 bg-[#00000070] ${
        location == "/" && "absolute"
      } w-full z-50 mx-auto left-0 right-0 flex items-center justify-between py-[10px]`}
    >
      <Link className="ml-[30px]" to={"/"}>
        <img
          className="untouchable"
          src="https://pub-5d689109f9c54618b392443e150975a9.r2.dev/websiteassets/irbis_logo.svg"
          alt="site logo"
          width="144" 
          height="112"
        />
      </Link>
      <ul className="hidden md:flex md:mr-[30px] gap-[32px]">
        {navbarList.map((text, index) => (
          <li key={index}>
            <Link
              to={text.path}
              className="font-bold md:text-[12px] lg:text-[18px] text-white duration-300 hover:text-[#00bfff] transition linear"
            >
              {text.title}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setOpen(!open)} className="mr-[30px] md:hidden">
        <img
          className="untouchable"
          src="https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/app_images/menu.svg"
          alt="open navbar menu"
          width="40"
          height="40"
        />
      </button>
      <MenuDrawer open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
