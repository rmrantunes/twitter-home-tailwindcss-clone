import React from "react";

export type TCardElements = [Element, Element, Element];
export interface ICardProps {
  title: string;
  Items?: TCardElements;
}

export const Card: React.FC<ICardProps> = ({ Items, title }) => {
  return (
    <div className="bg-tt-secondary rounded-xl overflow-hidden divide-y-2 divide-tt-outlines">
      <h3 className="font-bold text-xl px-4 py-3 ">{title}</h3>
      <div className="divide-y-2 divide-tt-outlines">
        {Items?.map((Item) => Item)}
      </div>
    </div>
  );
};
