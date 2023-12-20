"use client";

import clsx from "clsx";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Panel,
  PanelGroup,
  Stack,
} from "rsuite";

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

type ChallengePanelProps = {
  challenge: string;
  description: string;
  tasks: ChallengeTasks[];
  isActive: boolean;
  activeTaskId: string;
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
      <span>Estimate {estimateMinutes.join("-")}</span>
    </Stack>
  );
};

export const ChallengePanel: React.FC<ChallengePanelProps> = ({
  challenge,
  description,
  tasks,
  activeTaskId,
  isActive,
  onSelected,
  onCompleted,
}) => {
  return (
    <div>
      <h2>{challenge}</h2>
      <p>{description}</p>
      {tasks.map((task) => {
        return (
          <PanelGroup
            key={task.name}
            bordered
            className={clsx("", {
              "bg-sky-100 border-teal-500": task.id === activeTaskId,
            })}
          >
            <Panel
              style={{ background: "white" }}
              onClick={() => onSelected(task.id)}
              header={
                <TasksHeader
                  name={task.name}
                  estimateMinutes={task.estimateMinutes}
                  isChecked={false}
                  isActive={isActive}
                />
              }
              collapsible
            >
              <p>{task.description}</p>
              {/* <p>Difficulty: {task.difficulty}</p>
              <p>Estimate: {task.estimateMinutes.join("-")}</p> */}
              <p>Documentation: {task.documentation}</p>
              <ButtonGroup>
                <Button active onClick={() => onCompleted(task.id)}>
                  Complete Task
                </Button>
              </ButtonGroup>
            </Panel>
          </PanelGroup>
        );
      })}
    </div>
  );
};
