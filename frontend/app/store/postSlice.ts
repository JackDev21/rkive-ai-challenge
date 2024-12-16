import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Post } from "../src/interfaces/posts"

const initialState: Post[] = []

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (_state, action: PayloadAction<Post[]>) => {
      return action.payload
    },
  },
})

export const { setPosts } = postSlice.actions
export default postSlice.reducer
