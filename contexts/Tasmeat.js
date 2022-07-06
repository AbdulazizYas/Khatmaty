import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import useStorage from "../hooks/useStorage";

const TasmeatContext = createContext();

export function useTasmeat() {
  return useContext(TasmeatContext);
}

export const TasmeatProvider = ({ children }) => {
  const [khatmat, setKhatmat] = useStorage("khatmat", []);

  function addKhatmah({ time, jumps, vowels, words, uncomplete }) {
    setKhatmat((prev) => {
      return [
        ...prev,
        {
          id: uuid(),
          time,
          jumps,
          vowels,
          words,
          uncomplete,
        },
      ];
    });
  }

  return (
    <TasmeatContext.Provider
      value={{
        khatmat,
        addKhatmah,
      }}
    >
      {children}
    </TasmeatContext.Provider>
  );
};
