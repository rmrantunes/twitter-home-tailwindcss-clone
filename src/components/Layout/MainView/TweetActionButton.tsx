import React, { useCallback, useEffect, useState } from "react";
import { IconType } from "react-icons/lib";

interface ITweetActionButton {
  Icon: IconType;
  activeColorClass: string;
  numberOfIteractions: number;
}

export const TweetActionButton: React.FC<ITweetActionButton> = ({
  Icon,
  activeColorClass,
  numberOfIteractions,
}) => {
  const inactiveColorClass = "text-tt-gray";
  const [isActive, setIsActive] = useState(false);
  const [interactions, setInteractions] = useState(numberOfIteractions);
  const [colorClass, setColorClass] = useState(inactiveColorClass);

  useEffect(() => {
    setColorClass(isActive ? activeColorClass : inactiveColorClass);
    setInteractions((oldValue) => (isActive ? oldValue + 1 : oldValue - 1));
  }, [isActive, activeColorClass]);

  const handleClick = useCallback(() => {
    setIsActive((oldValue) => !oldValue);
  }, []);

  return (
    <button
      className={`${colorClass} flex-1 flex space-x-2 py-1 items-center justify-center rounded-xl focus:outline-none`}
      onClick={() => handleClick()}
    >
      <Icon />
      <span>{interactions}</span>
    </button>
  );
};
