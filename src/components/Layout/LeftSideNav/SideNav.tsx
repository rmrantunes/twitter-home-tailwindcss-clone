import React, { useState } from "react";
import { FaBell, FaHome, FaUser } from "react-icons/fa";
import { MdMail, MdFavorite } from "react-icons/md";
import { NavigationButton } from "./NavigationButton";
import { WriteATweetButton } from "./WriteATweetButton";

const navigationButtons = [
  {
    Icon: FaHome,
    text: "Página Inicial",
  },
  {
    Icon: FaBell,
    text: "Notificações",
  },
  {
    Icon: MdMail,
    text: "Mensagens",
  },
  {
    Icon: MdFavorite,
    text: "Favoritados",
  },
  {
    Icon: FaUser,
    text: "Perfil",
  },
];

export const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="sticky top-0 w-full h-full max-h-screen flex flex-col justify-between px-6 py-4">
      <div className="flex flex-col items-start ">
        {navigationButtons.map(({ Icon, text }, index) => (
          <NavigationButton
            Icon={Icon}
            text={text}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title={text}
            key={index}
          />
        ))}
        <WriteATweetButton />
      </div>
      <div className="rounded-full w-10 h-10 bg-tt-gray"></div>
    </nav>
  );
};
