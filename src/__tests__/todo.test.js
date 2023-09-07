import store from "../store/store";
import { addTodo, filterTodos, toggleDone } from "../slice/todoSlice";

test("allows users to add a new to-do item", () => {
  let state = store.getState().todo;
  const initialTodosCount = state.todos.length;
  store.dispatch(addTodo("Create awesome to-do app for Mindbox"));
  state = store.getState().todo;
  const newlyAddedTodo = state.todos.find(
    (todo) => todo.label === "Create awesome to-do app for Mindbox"
  );
  expect(newlyAddedTodo?.done).toBe(false);
  expect(state.todos.length).toBeGreaterThan(initialTodosCount);
});

test("allows users to mark a to-do item as completed", () => {
  let state = store.getState().todo;
  store.dispatch(toggleDone("Create awesome to-do app for Mindbox"));
  state = store.getState().todo;
  const addedTodo = state.todos.find(
    (todo) => todo.label === "Create awesome to-do app for Mindbox"
  );
  expect(addedTodo?.done).toBe(true);
});

test("allows users to filter todos based on their status", () => {
  let state = store.getState().todo;
  const initialActiveTodosCount = state.active.length;
  const initialCompletedTodosCount = state.completed.length;
  store.dispatch(addTodo("Add tests to awesome to-do app for Mindbox"));
  store.dispatch(filterTodos("Active"));
  store.dispatch(filterTodos("Completed"));
  state = store.getState().todo;
  expect(state.active.length).toBeGreaterThan(initialActiveTodosCount);
  expect(state.completed.length).toBeGreaterThan(initialCompletedTodosCount);
  expect(state.todos.length).toBeGreaterThanOrEqual(
    initialCompletedTodosCount + initialActiveTodosCount
  );
});
