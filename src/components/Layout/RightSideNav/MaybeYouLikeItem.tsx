import React from "react";
import { TTButton } from "../../TTButton";

export interface IMaybeYouLikeItemProps {
  name: string;
  userName: string;
}

export const MaybeYouLikeItem: React.FC<IMaybeYouLikeItemProps> = ({
  name,
  userName,
}) => {
  return (
    <div className="flex items-center py-3 px-4">
      <div className="rounded-full bg-tt-gray w-12 h-12"></div>
      <div className="text-sm leading-5 flex-1 pl-2">
        <p className="font-bold">{name}</p>
        <span className="text-tt-gray">{userName}</span>
      </div>
      <TTButton text="Seguir" className="leading-5" />
    </div>
  );
};
