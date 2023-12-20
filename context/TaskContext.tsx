// "use client";

// import React, { createContext, useState, useContext } from "react";
// import { Placeholder } from "rsuite";

// type TaskContextWrapper = {
//   children: React.ReactNode;
// };

// export type TaskContextProps = {
//   activeTask?: string;
//   tasks: string[];
//   setActiveTask: (content: string | undefined) => void;
//   setTasks: (content: string[]) => void;
// };
// const TaskContext = createContext<TaskContextProps>({
//   activeTask: undefined,
//   tasks: [],
//   setActiveTask: () => {},
//   setTasks: () => {},
// });

// export function TaskContextWrapper({ children }: TaskContextWrapper) {
//   const [activeTask, setActiveTask] = useState<string | undefined>(undefined);
//   const [tasks, setTasks] = useState<string[]>([]);

//   const handleTask = (task: any) => setActiveTask(task);

//   return (
//     <TaskContext.Provider
//       value={{ activeTask, tasks, setTasks, setActiveTask }}
//     >
//       <h2>Tasks: {tasks.length}</h2>
//       {/* <TaskTask isOpen={isOpen} onClose={handleOpen} onConfirm={handleOpen}>
//         {TaskContent ?? <Placeholder.Grid />}
//       </TaskTask>
//       */}
//       <main>{children}</main>
//     </TaskContext.Provider>
//   );
// }

// export function useTaskContext() {
//   return useContext(TaskContext);
// }
