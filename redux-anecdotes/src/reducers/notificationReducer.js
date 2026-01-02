import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "mensaje inicial",
  reducers: {},
});

export default notificationSlice.reducer;
