import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotificationMessage(state, action) {
      return action.payload;
    },
    clearNotification() {
      return "";
    },
  },
});

let timeoutId;

export const notify = (message, seconds = 5) => {
  return async (dispatch) => {
    dispatch(setNotificationMessage(message));

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch(clearNotification());
    }, seconds * 1000);
  };
};

export const { setNotificationMessage, clearNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
