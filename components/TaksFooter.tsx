"use client";

import React, { useState, useEffect } from "react";
import {
  faClock,
  faQuestionCircle,
  faInfoCircle,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "markdown-to-jsx";

import { useDrawerContext } from "@/context/DrawerContext";
import { ProjectTask } from "@/app/project/types";

export const TaskFooter: React.FC<{
  activeTask: ProjectTask;
  tasks: any;
  documentation: any;
  onCompleted: (id: string) => void;
}> = ({ activeTask, tasks, documentation, onCompleted }) => {
  const [timer, setTimer] = useState(590);
  const { handleOpen, setDrawerContent } = useDrawerContext();
  // Function to handle completing tasks
  // const completeAllTasks = () => {
  //   // Add your logic to mark all tasks as complete
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimer = () => {
    if (timer < 60) {
      return `${timer} seconds`;
    } else if (timer < 3600) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      return `${minutes}:${seconds} min`;
    } else {
      const hours = Math.floor(timer / 3600);
      const remainingTime = timer % 3600;
      const minutes = Math.floor(remainingTime / 60);
      return `${hours}:${minutes} hs`;
    }
  };

  const handleHelp = () => {
    // open IA assistant component with instructions ?
    setDrawerContent(<div>Help Content</div>);
    handleOpen();
  };

  const handleInfo = () => {
    setDrawerContent(
      <article className="prose lg:prose-xl">
        <Markdown>{documentation}</Markdown>
      </article>
    );
    handleOpen();
  };

  return (
    <div className="flex items-center justify-between text-sm">
      <div>
        <strong>Current Task:</strong> {activeTask?.name}
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="mr-2 text-lg" />
          <span>{formatTimer()}</span>
        </div>
        <button
          className="flex items-center p-0.5 text-xl rounded-full bg-gray-300"
          onClick={() => handleHelp()}
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-600" />
        </button>
        <button
          className="flex items-center p-0.5 text-xl rounded-full bg-gray-300"
          onClick={() => handleInfo()}
        >
          <FontAwesomeIcon icon={faInfoCircle} className="text-gray-600" />
        </button>
        {/* // todo add reset icon to reset timer */}
        <button
          className="flex items-center p-0.5 text-xl rounded-full hover:scale-110"
          onClick={() => handleInfo()}
        >
          <FontAwesomeIcon icon={faRefresh} className="text-white" />
        </button>
        {/* <i class="fa-regular fa-circle-pause"></i> */}

        <button
          className="flex items-center px-3 py-2 bg-blue-500 text-white rounded disabled:opacity-75"
          disabled={!activeTask}
          onClick={() => onCompleted(activeTask?.id)}
        >
          Complete Task
        </button>
      </div>
    </div>
  );
};
