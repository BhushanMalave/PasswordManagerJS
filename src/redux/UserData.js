import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: [{ id: 1, mno: 1234567897, mpin: 1234 }],
    userId: 0,
  },
  reducers: {
    addUser: (state, action) => {
      state.userId = action.payload.userId;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
