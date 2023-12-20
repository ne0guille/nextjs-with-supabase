"use client";

import React, { useState, useEffect } from "react";
import {
  faClock,
  faQuestionCircle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrawerContext } from "@/context/DrawerContext";
import { ChallengePanel } from "./ChallengePanel";

export const TaskFooter: React.FC<{
  activeTasks: string[];
  tasks: any;
}> = ({ activeTasks, tasks }) => {
  const [timer, setTimer] = useState(590);
  const { isOpen, handleOpen, setDrawerContent } = useDrawerContext();
  // Function to handle completing tasks
  const completeAllTasks = () => {
    // Add your logic to mark all tasks as complete
  };

  // Effect to update the timer every second
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
    // Add your logic to open the help drawer
    // open IA assistant component with instructions ?
    setDrawerContent(<div>Help Content</div>);
    handleOpen();
  };

  const handleInfo = () => {
    // Add your logic to open the help drawer
    // display info about the project/ tasks
    console.log(tasks);
    debugger;
    setDrawerContent(<pre>{JSON.stringify(tasks)}</pre>);
    handleOpen();
  };

  return (
    <div className="flex items-center justify-between ">
      <div>
        <strong>Current Task:</strong> {activeTasks[0]}
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <span>{formatTimer()}</span>
        </div>
        <button className="flex items-center p-2 rounded-full bg-gray-300">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="text-gray-600"
            onClick={() => handleHelp()}
          />
        </button>
        <button className="flex items-center p-2 rounded-full bg-gray-300">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-gray-600"
            onClick={() => handleInfo()}
          />
        </button>

        <button
          className="flex items-center px-3 py-2 bg-blue-500 text-white rounded"
          onClick={completeAllTasks}
        >
          Complete Task
        </button>
      </div>
    </div>
  );
};
