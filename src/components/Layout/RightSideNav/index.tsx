import React from "react";
import { Card, TCardElements } from "./Card";
import { SearchInput } from "./SearchInput";
import { IMaybeYouLikeItemProps, MaybeYouLikeItem } from "./MaybeYouLikeItem";
import {
  WhatIsHappeningItem,
  IWhatIsHappeningItemProps,
} from "./WhatIsHappeningItem";

const maybeYouLikeItemsList: IMaybeYouLikeItemProps[] = [
  {
    name: "TailwindCSS",
    userName: "@tailwindcss",
  },
  {
    name: "React JS",
    userName: "@reactjs",
  },
  {
    name: "My GitHub",
    userName: "@rmrantunes",
  },
];

const whatIsHappeningItemsList: IWhatIsHappeningItemProps[] = [
  { title: "TailwindCSS is growing fast" },
  { title: "React + Tailwind = Amazing DX" },
  { title: "Do not forget to see my GitHub" },
];

export const RightSideNav = () => {
  const maybeYouLikeItemsComponents = (maybeYouLikeItemsList.map(
    ({ name, userName }) => <MaybeYouLikeItem name={name} userName={userName} />
  ) as unknown) as TCardElements;

  const whatIsHappeningItemsComponents = (whatIsHappeningItemsList.map(
    ({ title }) => <WhatIsHappeningItem title={title} />
  ) as unknown) as TCardElements;

  return (
    <aside className="hidden lg:block w-100 py-2 px-6 space-y-4">
      <SearchInput />
      <Card title="Talvez você curta" Items={maybeYouLikeItemsComponents} />
      <Card
        title="O que está acontecendo"
        Items={whatIsHappeningItemsComponents}
      />
    </aside>
  );
};
