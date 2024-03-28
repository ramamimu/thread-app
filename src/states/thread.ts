"use client";
import { DetailThread, Thread } from "@/types/types/forumApi/shared";
import { createSlice } from "@reduxjs/toolkit";

export const threadSlice = createSlice({
  name: "thread",
  initialState: {
    threads: [] as Thread[],
  },
  reducers: {},
});

export const {} = threadSlice.actions;
export default threadSlice.reducer;
