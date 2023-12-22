---
title: "The ToDo Mastery App"
subtitle: "Classic todo app for beginners"
level: "easy"
tech: "react"
---

You already know what to do, you have create an application that allows users to display, add,remove, update tasks, and incorporate a search function for efficiency.

## 📝 Project Pre-Requisites:

- A basic understanding of JavaScript and ES6 syntax.
- Familiarity with HTML and CSS for crafting user interfaces.
- Prior exposure to React concepts such as components, props, state, and the component lifecycle.

## 💡 Pick design

Choose from one of our templates so you dont have to think about it. You can always create your own if you want

<!-- ## 💡 Tasks

- **Create Component Structure**:

  Build out the main components:

  - ` ToDoList, ToDoItem, ToDoForm, CategorySelector, and SearchBar`.

- **Implementing Core Features**:

  - add new to-dos.
  - remove to-dos.
  - Toggle to-dos status.

- **Enhancing Functionality**:

  - Filter to-dos.
  - Assign categories.

- **Polishing and Testing**:

  Refine the user interface for a seamless experience.
  Perform comprehensive testing across the features. -->

## 🔖 Recomended documentation

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Rendering Lists](https://react.dev/learn/rendering-lists)
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)

## 🚧 Need help?

If you get stuck you can ask the AI for help.

```
[Prompt]
i have a bug on my app.
Why placing an onClick event here is triggering an infinite loop.

<ul> { items.map(({id, text}) => {
    return ( <li key={id} onClick={select(id)}> {text} </li>);
    })}
</ul>

[Sample AI Response]
To avoid the infinite loop, one approach you can take is the following:

You are currently invoking the select function immediately
on render by using onClick={select(id)}.
Instead, wrap the select function call inside an arrow function
to avoid immediate invocation: onClick={() => select(id)}.
This way, the select function will only be called when the element is clicked.
```
