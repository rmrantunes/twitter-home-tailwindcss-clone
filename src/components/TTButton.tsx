import React from "react";

interface ITTButtonProps {
  text: string;
  className?: string;
}

export const TTButton: React.FC<ITTButtonProps> = ({
  text,
  children,
  className,
}) => {
  return (
    <button
      className={`${className} py-2 px-5 font-bold rounded-full border border-tt-color text-tt-color hover:bg-tt-color-800 hover:bg-opacity-10 active:bg-opacity-30 transition duration-200 focus:outline-none`}
    >
      {text}
      {children}
    </button>
  );
};
