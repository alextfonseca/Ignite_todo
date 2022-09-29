import React from "react";
import { SearchContainer } from "./styles";

import Plus from "../../../public/plus.svg";

interface SearchBoxProps {
  setTaskState: React.Dispatch<React.SetStateAction<string>>;
  taskValue: string;
  createTaskFunction: () => void;
}

export const SearchBox = ({
  setTaskState,
  taskValue,
  createTaskFunction,
}: SearchBoxProps) => {
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setTaskState(e.target.value)}
        value={taskValue}
      />

      <button type="button" onClick={createTaskFunction}>
        Criar
        <img src={Plus} alt="" />
      </button>
    </SearchContainer>
  );
};
