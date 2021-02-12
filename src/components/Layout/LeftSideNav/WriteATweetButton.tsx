import React from "react";

interface IWriteATweetButtonProps {
  className?: string;
}

export const WriteATweetButton: React.FC<IWriteATweetButtonProps> = ({
  className = "",
}) => {
  return (
    <button
      className={`${className} w-full bg-tt-color font-bold rounded-full py-4`}
    >
      <span className="hidden xl:block">Tweetar</span>
    </button>
  );
};
