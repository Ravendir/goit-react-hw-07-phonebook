import mainReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  devTools: true,
  reducer: {
    contacts: mainReducer,
  },
});

export default store;
