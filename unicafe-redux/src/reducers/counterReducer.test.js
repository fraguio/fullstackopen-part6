import deepFreeze from "deep-freeze";
import { describe, expect, test } from "vitest";
import counterReducer from "./counterReducer";

describe("unicafe reducer", () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  test("should return a proper initial state when called with undefined state", () => {
    const action = {
      type: "DO_NOTHING",
    };

    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test("ok is incremented", () => {
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, { type: "OK" });

    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0,
    });
  });

  test("bad is incremented", () => {
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, { type: "BAD" });

    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1,
    });
  });

  test("ZERO resets state", () => {
    const state = {
      good: 3,
      ok: 2,
      bad: 1,
    };

    deepFreeze(state);
    const newState = counterReducer(state, { type: "ZERO" });

    expect(newState).toEqual(initialState);
  });
});
