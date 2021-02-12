import React from "react";

export interface IWhatIsHappeningItemProps {
  info?: string;
  title: string;
}

export const WhatIsHappeningItem: React.FC<IWhatIsHappeningItemProps> = ({
  title,
  info = "Assuntos do momento no Brasil",
}) => {
  return (
    <div className="py-3 px-4">
      <span className="text-tt-gray text-sm">{info}</span>
      <p className="font-bold leading-3" role="button">
        {title}
      </p>
    </div>
  );
};
