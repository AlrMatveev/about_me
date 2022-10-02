import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPages = createAsyncThunk(
  "pages/fetchPages",
  async function () {
    const response = await fetch("http://localhost:3001/api/pages", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  }
);

export const pagesSlice = createSlice({
  name: "pages",
  initialState: { data: [], status: "loading", activPage: null },
  reducers: {
    setPage: (state, action) => {
      state.activPage = action.payload;
    },
  },
  extraReducers: {
    [fetchPages.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPages.fulfilled]: (state, action) => {
      state.activPage = action.payload[0]?.name;
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchPages.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { setPage } = pagesSlice.actions;

export default pagesSlice.reducer;
