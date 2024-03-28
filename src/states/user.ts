"use client";
import { OwnProfileResponse } from "@/types/types/forumApi";
import { User } from "@/types/types/forumApi/shared";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    ownProfile: {
      id: "",
      name: "",
      email: "",
      avatar: "",
    } as User,
    users: [] as User[],
  },
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
