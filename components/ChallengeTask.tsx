"use client";

import { ProjectTask } from "@/app/project/types";
import Checkbox from "rsuite/Checkbox";

// const tasks: ProjectTask = [
//   {
//     name: "Create Todo List Component",
//     description: "We need to display a list of todos",
//     isComplete: false,
//     documentation: [
//       "Create a Todo component",
//       "Create a Todo component",
//       "Create a Todo component",
//       "Create a Todo component",
//     ],
//     createdAt: new Date(),
//   },
//   {
//     name: "Create Individual Todo Component",
//     description: "We want to display each todo individually",
//     isComplete: false,
//     documentation: [
//       "Create a Todo component",
//       "Create a Todo component",
//       "Create a Todo component",
//       "Create a Todo component",
//     ],
//     createdAt: new Date(),
//   },
// ];

export default function ChallengeTask({
  name = "",
  description = "",
  isCompleted = false,
  onCheck = () => {},
}) {
  return (
    <div>
      <Checkbox checked={isCompleted} onChange={onCheck}></Checkbox>

      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
