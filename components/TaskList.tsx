"use client";

import clsx from "clsx";
import { Button, ButtonGroup, List, Stack } from "rsuite";

type TaksDifficulty = "easy" | "medium" | "hard";
type TasksEstimatation = 5 | 10 | 15 | 30 | 60 | 120;

type ChallengeTasks = {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
  documentation: string[];
  difficulty: TaksDifficulty;
  estimateMinutes: TasksEstimatation[];
};

type TaskListProps = {
  challenge: string;
  description: string;
  tasks: ChallengeTasks[];
  isActive: boolean;
  activeTaskId: string;
  isCompleted: boolean;
  onSelected: (id: string) => void;
  onCompleted: (id: string) => void;
  // onCheck: (task: ChallengeTasks) => void;
};
const TasksHeader = ({
  name = "Task",
  estimateMinutes = [],
  isChecked = false,
}: {
  name: string;
  estimateMinutes: TasksEstimatation[];
  isChecked: boolean;
  isActive: boolean;
}) => {
  // todo add isactive style
  return (
    <Stack justifyContent="space-between">
      <span>{name}</span>
      <span>{estimateMinutes.join("-")}</span>
    </Stack>
  );
};

export const TaskList: React.FC<TaskListProps> = ({
  challenge,
  description,
  tasks,
  activeTaskId,
  isActive,
  onSelected,
  onCompleted,
}) => {
  return (
    <>
      <Stack className="text-base" justifyContent="space-between">
        <span>Task</span>
        <span>Estimate</span>
      </Stack>

      <List bordered>
        {tasks.map((task) => (
          <List.Item
            key={task.id}
            className={clsx("break-words", {
              "bg-sky-100 border-teal-500 text-sm font-semibold":
                task.id === activeTaskId,
              "text-xs": task.id !== activeTaskId,
              "line-through": task.isComplete,
            })}
            onClick={() => onSelected(task.id)}
          >
            <TasksHeader
              name={task.name}
              estimateMinutes={task.estimateMinutes}
              isChecked={false}
              isActive={isActive}
            />
          </List.Item>
        ))}
      </List>
    </>
  );
};
