"use client";

import { Container, Content, Footer, Sidebar } from "rsuite";
import { TaskFooter } from "@/components/TaksFooter";
import TodoTaskData from "@/data/todoAppTasks.json";
import { useState } from "react";
import { TaskList } from "./TaskList";
import Markdown from "markdown-to-jsx";
import { ProjectHeader } from "./ProjectHeader";
const mockedChallenge: any = TodoTaskData;

export const ProjectTaskContainer = ({
  documentation,
}: {
  documentation: any;
}) => {
  const [activeTaskId, setActiveTaskId] = useState(mockedChallenge.tasks[0].id);
  // map tassks  name and description
  const activeTask = mockedChallenge.tasks.find(
    (task: any) => task.id === activeTaskId
  );
  const handleTaskSelected = (id: string) => {
    console.log("selected", id);
    setActiveTaskId(id);
  };
  const handleTaskCompleted = (id: string) => {
    // set complete task
    const task = mockedChallenge.tasks.find((task: any) => task.id === id);
    task.isComplete = true;
    if (id === mockedChallenge.tasks[mockedChallenge.tasks.length - 1].id) {
      setActiveTaskId(0);
      return;
    }
    setActiveTaskId(String(+id + 1));
  };
  return (
    <>
      <Sidebar className="h-screen">
        <div className="max-h-full overflow-y-auto">
          <TaskList
            {...mockedChallenge}
            activeTaskId={activeTaskId}
            onSelected={handleTaskSelected}
          />
        </div>
      </Sidebar>
      <Container>
        <Content className="flex justify-center w-full items-start bg-white">
          <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md md:max-w-2xl justify-center gap-2">
            <ProjectHeader title={mockedChallenge.challenge} />
            <article className="prose">
              <Markdown>{documentation}</Markdown>
            </article>
          </div>
        </Content>
        <Footer className=" bottom-0 w-full bg-gray-800 text-white p-4">
          <TaskFooter
            documentation={documentation}
            tasks={{ ...mockedChallenge }}
            activeTask={activeTask}
            onCompleted={handleTaskCompleted}
          />
        </Footer>
      </Container>
    </>
  );
};
