import React, { useCallback, useRef, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const visibilityClass = (text: string) => (text ? "visible" : "invisible");

export const SearchInput = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = useCallback(() => {
    setText("");
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-tt-primary sticky top-0 pt-2 pb-5">
      <form className="w-full bg-tt-search text-tt-gray rounded-full px-5 focus-within:text-tt-color focus-within:ring-2 focus-within:ring-tt-color focus-within:bg-tt-primary transition duration-200 ">
        <div className="flex items-center space-x-2">
          <div>
            <FiSearch size={20} />
          </div>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent focus:outline-none py-2 focus:text-tt-white"
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
          <div
            className={`${visibilityClass(
              text
            )} text-white bg-tt-color p-1 rounded-full`}
            role="button"
            onClick={clearInput}
          >
            <FiX />
          </div>
        </div>
      </form>
    </div>
  );
};
