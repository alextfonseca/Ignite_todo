import React, { useEffect, useState } from "react";

import {
  Container,
  HomeContainer,
  TasksContainer,
  TasksNotExists,
} from "./style";

import Clipboard from "../../../public/clipboard.png";

import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { TaskItem } from "../../components/TaskItem";
import { SearchBox } from "../../components/SearchBox";
import { TaskInfos } from "../../components/TaskInfos";

interface taskListProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

export const Home = () => {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState<taskListProps[]>([]);

  useEffect(() => {
    const stateJSON = JSON.stringify(taskList);

    if (taskList.length > 0) {
      localStorage.setItem("@ignite-todo:tasks-state-1.0.0", stateJSON);
    }
  }, [taskList]);

  useEffect(() => {
    const storedStateJSON = localStorage.getItem(
      // eslint-disable-next-line prettier/prettier
      "@ignite-todo:tasks-state-1.0.0",
    );

    if (storedStateJSON) {
      setTaskList(JSON.parse(storedStateJSON));
    }
  }, []);

  function handleCreateTask() {
    if (!task) {
      toast.warning("É necessário digitar uma tarefa");
      return;
    }

    const taskObject = {
      id: taskList.length + 1,
      text: task,
      isCompleted: false,
    };

    setTaskList((state) => [...state, taskObject]);

    setTask("");
  }

  function handleRemoveTask(taskId: number) {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  }

  function toggleTaskCompletedById(taskId: number) {
    const newTasks = taskList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskList(newTasks);
  }

  return (
    <div>
      <HomeContainer>
        <Header />

        <Container>
          <SearchBox
            createTaskFunction={handleCreateTask}
            setTaskState={setTask}
            taskValue={task}
          />

          <TaskInfos taskList={taskList} />

          <div>
            {taskList.length === 0 && (
              <TasksNotExists>
                <img src={Clipboard} alt="" />

                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </TasksNotExists>
            )}

            <TasksContainer>
              {taskList.map((task) => {
                return (
                  <TaskItem
                    key={task.id}
                    taskData={task}
                    completedTaskFunction={toggleTaskCompletedById}
                    removeTaskFunction={handleRemoveTask}
                  />
                );
              })}
            </TasksContainer>
          </div>
        </Container>
      </HomeContainer>
    </div>
  );
};
