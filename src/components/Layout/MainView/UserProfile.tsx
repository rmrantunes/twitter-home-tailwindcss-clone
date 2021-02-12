import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { Padding } from "../../Padding";
import { TTButton } from "../../TTButton";

export const UserProfile = () => {
  return (
    <div className="flex flex-col">
      <div className="h-52 bg-tt-color"></div>
      <Padding className="flex">
        <div className="flex-1">
          <div className="bg-tt-gray w-32 h-32 rounded-full border-4 border-tt-primary relative -top-16 -mb-16"></div>
          <div className="mt-px space-y-4">
            <div>
              <h4 className="text-xl text-tt-white font-bold">
                Rafael Antunes
              </h4>
              <span className="text-tt-gray">@rmrantunes</span>
            </div>
            <div className="">
              <span className="">
                Developer with{" "}
                <a
                  href="https://twitter.com/tailwindcss"
                  className="text-tt-color"
                >
                  @Tailwind
                </a>
              </span>
            </div>
            <div className="text-tt-gray text-sm">
              <p className="flex space-x-2 items-center">
                <ImLocation />
                <span>Ji-Paraná, Brasil</span>
              </p>
              <p className="flex space-x-2 items-center">
                <FaBirthdayCake />
                <span>Nascido(a) em 21 de junho de 2001</span>
              </p>
            </div>
            <div className="text-tt-gray text-sm space-x-2">
              <span>
                seguindo <strong className="text-tt-white">94</strong>
              </span>
              <span>
                <strong className="text-tt-white">672</strong> seguidores
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <TTButton text="Editar perfil" />
        </div>
      </Padding>
    </div>
  );
};
