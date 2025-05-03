import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      const { text, sender } = action.payload;
      state.push({
        id: Date.now(),
        text: text,
        sender: sender,
      });
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
