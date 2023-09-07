import React, { useMemo } from "react";
import "./App.css";
import { ToDoList } from "../to-do-list/to-do-list";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state: any) => state.todo.todos);
  const completed = useSelector((state: any) => state.todo.completed);
  const active = useSelector((state: any) => state.todo.active);
  const filter = useSelector((state: any) => state.todo.filter);
  const items = useMemo(() => {
    switch (filter) {
      case "All":
        return todos;
      case "Completed":
        return completed;
      case "Active":
        return active;
      default:
        return todos;
    }
  }, [filter, todos]);

  return (
    <div className="App flex flex-col items-center justify-center w-screen h-screen bg-stone-50 font-mono text-stone-500">
      <h1 className="text-7xl text-stone-300">TODOS</h1>
      <ToDoList items={items} />
    </div>
  );
}

export default App;
