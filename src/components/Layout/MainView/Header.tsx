import React from "react";
import { Padding } from "../../Padding";

import { BsArrowLeft } from "react-icons/bs";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-tt-primary z-10">
      <nav>
        <Padding className="flex space-x-4 py-2">
          <div role="button" className="py-2">
            <BsArrowLeft className="text-tt-color" size={32} />
          </div>
          <div>
            <p className="text-xl">Rafael Antunes</p>
            <span className="text-tt-gray">324 Tweets</span>
          </div>
        </Padding>
      </nav>
    </header>
  );
};
