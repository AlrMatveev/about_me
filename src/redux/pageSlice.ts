import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import db from "../firebase";
import { get, ref, child } from "firebase/database";

export const fetchPage = createAsyncThunk(
  "page/fetchPage",
  async (page: string) => {
    const dbRef = ref(db);
    const result = await get(child(ref(db), page));
    const data = await result.val();
    return { data: data, name: page };
  }
);

const initialState: any = {
  page: { name: null, data: null },
  status: null,
};

export const pageSlice = createSlice({
  name: "state",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPage.pending, (state) => {
        state.page = { name: null, data: null };
        state.status = "loading";
      })
      .addCase(fetchPage.fulfilled, (state, action: PayloadAction<any>) => {
        state.page = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchPage.rejected, (state) => {
        state.page = { name: null, data: null };
        state.status = "error";
      });
  },
});

export default pageSlice.reducer;
