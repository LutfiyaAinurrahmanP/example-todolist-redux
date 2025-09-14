import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    createTodo(state, action) {
      const name = action.payload;
      state.push({
        id: nanoid,
        name: name,
        date: new Date().toISOString(),
      });
    },
    updateTodo(state, action) {
      const { id, name, date } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        if (name !== undefined) todo.name = name;
        if (date !== undefined) todo.date = date;
      }
    },
    deleteTodo(state, action) {
      const id = action.payload;
      return state.filter((t) => t.id !== id);
    },
  },
});

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export const todosActions = todosSlice.actions;
export default store;
