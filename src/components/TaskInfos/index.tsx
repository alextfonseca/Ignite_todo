import React from "react";
import { Infos } from "./styles";

interface TaskInfosProps {
  taskList: {
    id: number;
    text: string;
    isCompleted: boolean;
  }[];
}

export const TaskInfos = ({ taskList }: TaskInfosProps) => {
  const completedTasks = taskList.filter((task) => task.isCompleted).length;

  return (
    <Infos>
      <p>
        Tarefas criadas <span>{taskList.length}</span>
      </p>

      <p>
        Concluídas{" "}
        <span>
          {completedTasks} de {taskList.length}
        </span>
      </p>
    </Infos>
  );
};
