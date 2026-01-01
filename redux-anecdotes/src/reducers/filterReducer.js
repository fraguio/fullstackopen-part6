export const filterAnecdotes = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

const reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload.toLowerCase();
    default:
      return state;
  }
};

export default reducer;
