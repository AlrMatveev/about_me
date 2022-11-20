import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { pages } from "./mock";
import db from "../firebase";
import { get, ref } from "firebase/database";

export const fetchData = createAsyncThunk(
  "page/fetchPage",
  async (page: string) => {
    console.log(page);
    get(ref(db, "technologies/")).then((snapshot) => {
      console.log(snapshot.val());
    });
  }
);

const initialState: any = {
  page: null,
  status: null,
};

export const dataSlice = createSlice({
  name: "technologies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
        state.page = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchData.rejected, (state) => {
        state.page = null;
        state.status = "error";
      });
  },
});

export default dataSlice.reducer;
