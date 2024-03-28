"use client";
import { DetailThread, Thread } from "@/types/types/forumApi/shared";
import { createSlice } from "@reduxjs/toolkit";

export const detailThreadSlice = createSlice({
  name: "detailThread",
  initialState: {
    detailThreads: {
      id: "",
      title: "",
      body: "",
      category: "",
      createdAt: "",
      upVotesBy: [],
      downVotesBy: [],
      owner: [],
      comments: [],
    } as DetailThread,
  },
  reducers: {},
});

export const {} = detailThreadSlice.actions;
export default detailThreadSlice.reducer;
