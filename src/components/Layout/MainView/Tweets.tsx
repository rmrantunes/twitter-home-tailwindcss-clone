import React from "react";
import { FaComment, FaRetweet } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { TweetActionButton } from "./TweetActionButton";

export const Tweets = () => {
  return (
    <main>
      <div className="text-tt-color text-center font-bold py-4 border-b-4  border-tt-color">
        <span>Tweets</span>
      </div>
      <section>
        <div className="px-4 py-3 grid grid-cols-tweet-card gap-x-3">
          <p className="col-start-2 text-tt-gray text-sm flex space-x-3 -ml-6 items-center">
            <FaRetweet />
            <span>Você retuitou</span>
          </p>
          <div className="h-12 bg-tt-gray rounded-full"></div>
          <div>
            <div className="flex text-sm flex-col">
              <a href="@" className="text-tt-gray space-x-1">
                <span className="text-tt-white font-bold">TailwindCSS</span>
                <span>@tailwindcss</span>
                <span>•</span>
                <span>27 de jun</span>
              </a>
              <p>Foguete não tem ré 🚀</p>
            </div>
          </div>
          <div className="col-start-2 h-64 bg-tt-gray rounded-xl"></div>
          <div className="col-start-2 flex items-center py-2 gap-x-4 text-sm">
            <TweetActionButton
              Icon={FaComment}
              numberOfIteractions={123}
              activeColorClass="text-tt-color"
            />
            <TweetActionButton
              Icon={FaRetweet}
              numberOfIteractions={18}
              activeColorClass="text-tt-rt"
            />
            <TweetActionButton
              Icon={MdFavorite}
              numberOfIteractions={624}
              activeColorClass="text-tt-favorite"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
