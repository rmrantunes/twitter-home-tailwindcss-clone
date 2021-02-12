import React from "react";
import { SideNav } from "./SideNav";

export const LeftSideNav = () => {
  return (
    <aside className="sm:block hidden w-auto xl:w-72 sticky">
      <SideNav />
    </aside>
  );
};
