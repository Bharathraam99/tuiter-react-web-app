import { createSlice } from "@reduxjs/toolkit";
import exploreArray from "./explore.json";

const exploreSlice = createSlice({
  name: "explore",
  initialState: exploreArray,
});

export default exploreSlice.reducer;
