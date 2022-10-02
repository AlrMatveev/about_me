import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTechnologies = createAsyncThunk(
  "technologies/fetchPages",
  async function () {
    const response = await fetch("http://localhost:3001/api/technologies", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  }
);

export const technologiesSlice = createSlice({
  name: "technologies",
  initialState: { data: [], status: "loading" },
  reducers: {},
  extraReducers: {
    [fetchTechnologies.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTechnologies.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchTechnologies.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default technologiesSlice.reducer;
