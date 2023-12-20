"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const TiptapEditor = ({ text }: { text?: string }) => {
  const editor = useEditor({
    editable: false,
    extensions: [StarterKit],
    content:
      text ||
      "<p>Hello World! 🌎️</p>" +
        "<p>Define a clear component structure for the Todo app, considering components for adding, displaying, updating, and removing todos</p>" +
        " For example: **`App`**, **`Header`**, **`TodoForm`**, **`TodoList`**, **`TodoItem`**" +
        "- **Tasks**:" +
        "- Define a clear component structure for the Todo app, considering components for adding, displaying, updating, and removing todos.|",
  });

  return <EditorContent editor={editor} />;
};
