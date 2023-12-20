"use client";

import React from "react";
import { Drawer, Button } from "rsuite";

export const TaskDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  content?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ children, content, isOpen, onClose, onConfirm }) => {
  // Function to handle completing tasks
  return (
    <>
      <Drawer backdrop={"static"} open={isOpen} onClose={onClose}>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onConfirm} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>{children || content}</Drawer.Body>
      </Drawer>
    </>
  );
};
