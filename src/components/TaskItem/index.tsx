import { CheckCircle } from "phosphor-react";
import React from "react";
import { CompletedTaskButton, RemoveTaskButton, TasksItem } from "./styles";

import Trash from "../../../public/trash.svg";

interface TaskItemProps {
  taskData: {
    id: number;
    text: string;
    isCompleted: boolean;
  };

  completedTaskFunction: (taskId: number) => void;
  removeTaskFunction: (taskId: number) => void;
}

export const TaskItem = ({
  taskData,
  completedTaskFunction,
  removeTaskFunction,
}: TaskItemProps) => {
  return (
    <TasksItem key={taskData.id}>
      <CompletedTaskButton
        type="button"
        onClick={() => completedTaskFunction(taskData.id)}
      >
        {taskData.isCompleted ? (
          <CheckCircle size={25} color="#fff" />
        ) : (
          <div />
        )}
      </CompletedTaskButton>
      <p className={taskData.isCompleted ? "completed" : ""}>{taskData.text}</p>

      <RemoveTaskButton
        type="button"
        onClick={() => removeTaskFunction(taskData.id)}
      >
        <img src={Trash} alt="" />
      </RemoveTaskButton>
    </TasksItem>
  );
};
