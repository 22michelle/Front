import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./notesSlice";

const store = configureStore({
  reducer: {
    noteStore: noteReducer,
  },
});

export default store;
