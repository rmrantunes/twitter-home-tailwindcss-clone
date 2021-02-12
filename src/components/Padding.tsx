import React from "react";

interface IPaddingProps {
  className?: string;
}

export const Padding: React.FC<IPaddingProps> = ({ children, className }) => {
  return <div className={`px-4 ${className}`}>{children}</div>;
};
