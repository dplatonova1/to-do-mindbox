import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../components/to-do-list/to-do-list";

const initialState = {
  count: 0,
  todos: [] as Todo[],
  completed: [] as Todo[],
  active: [] as Todo[],
  filter: "All",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        label: action.payload,
        done: false,
      };
      state.todos.push(todo);
      state.count += 1;
    },

    toggleDone: (state, action) => {
      state.todos = state.todos.map((todo: Todo) => {
        if (todo.label === action.payload) {
          if (todo.done === false) {
            state.count -= 1;
            return { ...todo, done: true };
          } else {
            state.count += 1;
            return { ...todo, done: false };
          }
        } else {
          return { ...todo };
        }
      });
    },
    filterTodos: (state, action) => {
      state.filter = action.payload;
      switch (action.payload) {
        case "All":
          state.todos = state.todos;
          break;
        case "Completed":
          state.completed = state.todos.filter(
            (todo: Todo) => todo.done === true
          );
          break;
        case "Active":
          state.active = state.todos.filter(
            (todo: Todo) => todo.done === false
          );
          break;
      }
    },
    clearComplete: (state) => {
      state.completed = [];
      state.todos = state.todos.filter((todo: Todo) => todo.done === false);
    },
  },
});

export const { addTodo, toggleDone, filterTodos, clearComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
