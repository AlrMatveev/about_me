import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./pagesSlice";
import technologiesReducer from "./technologiesSlice";

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
    technologies: technologiesReducer,
  },
});
