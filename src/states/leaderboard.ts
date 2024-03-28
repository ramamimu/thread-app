"use client";
import { Leaderboard } from "@/types/types/forumApi/shared";
import { createSlice } from "@reduxjs/toolkit";

export const learderboardSlice = createSlice({
  name: "learderboard",
  initialState: {
    leaderboards: [] as Leaderboard[],
  },
  reducers: {},
});

export const {} = learderboardSlice.actions;
export default learderboardSlice.reducer;
