"use client";

import { ProjectTask } from "@/app/project/types";
import { TiptapEditor } from "./TipTapEditor";

export const TaskDetails = ({ task }: { task: ProjectTask }) => {
  console.log("task", task);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">{task?.name}</h1>
      <TiptapEditor text={task?.description} />
    </div>
  );
};
