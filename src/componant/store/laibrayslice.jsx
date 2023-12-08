import { createSlice } from "@reduxjs/toolkit";
const uer = JSON.parse(localStorage.getItem("Login"));
console.log("wnmwnw", uer);
const expn = JSON.parse(localStorage.getItem("expensives"));
console.log("EXpen CONSOLE", expn);
const laibrayslice = createSlice({
  name: "EXPENSIVE TRACKER",
  initialState: {
    user: uer,
    expensive: expn || [],
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("Login", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
    },
    addExpensive: (state, action) => {
      const expensives = {
        ...action.payload,
        id: Math.random(),
      };
      state.expensive.push(expensives);
      localStorage.setItem("expensives", JSON.stringify(state.expensive));
    },
    expenDelete: (state, action) => {
      const detete = action.payload;
      console.log("action paylod", action.payload);
      state.expensive = state.expensive.filter((b) => b.id !== detete);
      localStorage.setItem("expensives", JSON.stringify(state.expensive));
    },
    expensiveedit: (state, action) => {
      const Expnedit = action.payload;
      state.expensive = state.expensive.map((eedit) =>
        eedit.id === Expnedit.id ? { ...Expnedit } : eedit
      );
      localStorage.setItem("expensives", JSON.stringify(state.expensive));
    },
  },
});
export const { loginUser, logout, addExpensive, expenDelete, expensiveedit } =
  laibrayslice.actions;
export default laibrayslice.reducer;
