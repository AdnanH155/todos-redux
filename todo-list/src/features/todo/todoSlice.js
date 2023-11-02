import { createSlice } from "@reduxjs/toolkit";

const initialState = { done: false };

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    setTodos: (state, { payload }) => {
      state.todos = payload;
    },
    toggleCompleted: (state, { payload }) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
    setNewTodoInput: (state, { payload }) => {
      state.setNewTodoInput = payload;
    },
    addNewTodo: (state) => {
      const index = state.todos.findIndex(
        (todo) => todo.title === state.newTodoInput
      );

      if (index > -1) {
        return;
      }

      state.todos.push({
        title: state.newTodoInput,
        completed: false,
        userId: 1,
        id: Math.round(Math.random() * 1000000),
      });
    },
    setImportant: (state) => {
      state.done = !state.done;
    },

    deleteTodo: (state) => {
      const todos = [...todos];
      const index = todos.findIndex(todos);
    },
  },
});

export const {
  setTodos,
  toggleCompleted,
  setNewTodoInput,
  addNewTodo,
  setImportant,
  deleteTodo,
} = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;
export const selectDone = (state) => state.todo.done;
export default todoSlice.reducer;
