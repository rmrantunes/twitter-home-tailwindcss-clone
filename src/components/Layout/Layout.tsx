import React from "react";
import { LeftSideNav } from "./LeftSideNav";
import { MainView } from "./MainView";
import { RightSideNav } from "./RightSideNav";

export const Layout: React.FC = () => {
  return (
    <div className="px-0 sm:px-4 min-h-screen w-full bg-tt-primary text-tt-white flex">
      <LeftSideNav />
      <MainView />
      <RightSideNav />
    </div>
  );
};
