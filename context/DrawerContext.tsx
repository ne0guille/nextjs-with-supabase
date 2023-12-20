"use client";
import React, { createContext, useState, useContext } from "react";
import { TaskDrawer } from "@/components/TaskDrawer";
import { Placeholder } from "rsuite";
export type DrawerContextProps = {
  isOpen: boolean;
  handleOpen: () => void;
  setDrawerContent: (content: React.ReactNode) => void;
};
const DrawerContext = createContext<DrawerContextProps>({
  isOpen: false,
  handleOpen: () => {},
  setDrawerContent: () => {},
});

export function DrawerContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode>(null);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <DrawerContext.Provider value={{ isOpen, handleOpen, setDrawerContent }}>
      <TaskDrawer isOpen={isOpen} onClose={handleOpen} onConfirm={handleOpen}>
        {drawerContent ?? <Placeholder.Grid />}
      </TaskDrawer>
      <main>{children}</main>
    </DrawerContext.Provider>
  );
}

export function useDrawerContext() {
  return useContext(DrawerContext);
}
