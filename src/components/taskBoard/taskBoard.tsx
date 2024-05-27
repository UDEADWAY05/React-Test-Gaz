import { useState } from "react";
import styles from "./taskBoard.module.css"
import { Selector } from "../selector";
import { TaskType } from "../../types/taskType";
import { InfoCard } from "../infoCard";

const initialState: TaskType = {
  label: "Я исполнитель",
  value: "myExecutor"
}

const initialtasks: TaskType[] = [
  {
    label: "Я исполнитель",
    value: "myExecutor"
  },
  {
    label: "Другие исполнители",
    value: "OtherExecutors"
  },
  {
    label: "Мы исполнители",
    value: "weExecutors"
  }
]

export const TaskBoard = () => {
  const [taskType, setTaskType] = useState<TaskType>(initialState) 
  const [taskTypes, setTaskTypes] = useState<TaskType[]>(initialtasks)

  const handleTaskTypeChange = (taskType: TaskType) => {
    setTaskType(taskType)
  };

  return <div className={styles.tasks}>
    <div className={styles.tasksHeader}>
      <p className={styles.tasksTitle}>
        Задачи
      </p>
      <div>
        <Selector onTaskChange={handleTaskTypeChange} value={taskType} options={taskTypes}/>
      </div>
    </div>
    <div className={styles.tasksBody}>
      <InfoCard
        label="Мои задачи"
        firstQuantity={"+3"}
        secondQuantity={"32"}
        firstColor="positive"
      />
      <InfoCard
        label="В работе / просрочено"
        firstQuantity={"18"}
        secondQuantity={"6"}
        secondColor="negative"
      />
      <InfoCard
        label="На проверке"
        firstQuantity={"+4"}
        secondQuantity={"16"}
        firstColor="positive"
      />
      <InfoCard
        label="С моим участием"
        firstQuantity={"220"}
      />
    </div>
  </div>;
}