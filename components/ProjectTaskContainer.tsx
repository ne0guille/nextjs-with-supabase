"use client";

import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import { ChallengePanel } from "@/components/ChallengePanel";
import { TaskFooter } from "@/components/TaksFooter";
import { TaskDetails } from "./TaskDetails";
import TodoTaskData from "@/data/todoAppTasks.json";
import { useState } from "react";
import { TaskList } from "./TaskList";
const mockedChallenge: any = TodoTaskData;

export const ProjectTaskContainer = () => {
  const [activeTaskId, setActiveTaskId] = useState(mockedChallenge.tasks[0].id);
  // map tassks  name and description
  const taskName = mockedChallenge.tasks.map((task: any) => task.name);
  const handleTaskSelected = (id: string) => {
    console.log("selected", id);
  };
  const handleTaskCompleted = (id: string) => {
    console.log("completed", id);
    setActiveTaskId(String(+id + 1));
  };
  return (
    <>
      <Sidebar className="h-screen">
        <div className="max-h-full overflow-y-auto">
          <TaskList
            {...mockedChallenge}
            activeTaskId={activeTaskId}
            onCompleted={handleTaskCompleted}
            onSelected={handleTaskSelected}
          />
        </div>
      </Sidebar>
      <Container>
        <Header className="justify-center">Todo App</Header>
        <Content className="flex justify-center w-full items-start bg-white">
          <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md md:max-w-2xl justify-center gap-2">
            <TaskDetails task={mockedChallenge.tasks[0]} />
          </div>
        </Content>
        <Footer className=" bottom-0 w-full bg-gray-800 text-white p-4">
          <TaskFooter tasks={{ ...mockedChallenge }} activeTasks={taskName} />
        </Footer>
      </Container>
    </>
  );
};
