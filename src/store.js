import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./features/messages/messagesSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    modal: modalReducer,
  },
});
