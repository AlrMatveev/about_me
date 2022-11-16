import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { pages } from "./mock";

export const fetchData = createAsyncThunk(
  "weather/fetchData",
  async (page: string) => {
    try {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(pages), 1000);
      });
      let result: any = await promise;
      return result[page];
    } catch (err) {
      console.log(err);
    }
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
