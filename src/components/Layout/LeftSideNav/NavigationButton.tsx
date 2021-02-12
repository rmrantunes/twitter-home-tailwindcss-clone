import React from "react";
import { IconType } from "react-icons";

export interface INavigationButtonProps {
  Icon: IconType;
  text: string;
  title?: string;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const setActiveColor = (activeIndex: number, index: number) =>
  activeIndex === index ? "text-tt-color" : "text-tt-white";

export const NavigationButton: React.FC<INavigationButtonProps> = ({
  Icon,
  text,
  setActiveIndex,
  activeIndex,
  index,
  title,
}) => {
  return (
    <button
      type="button"
      className={`${setActiveColor(
        activeIndex,
        index
      )} flex space-x-5 justify-center xl:justify-start items-center py-4 w-full focus:outline-none`}
      onClick={() => setActiveIndex(index)}
      title={title}
    >
      <Icon size={24} />
      <span className="hidden xl:block text-xl font-bold">{text}</span>
    </button>
  );
};
