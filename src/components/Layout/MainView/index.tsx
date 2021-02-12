import React from "react";
import { Header } from "./Header";
import { Tweets } from "./Tweets";
import { UserProfile } from "./UserProfile";

export const MainView = () => {
  return (
    <div className="border-l border-r border-tt-outlines flex-1">
      <Header />
      <UserProfile />
      <Tweets />
    </div>
  );
};
