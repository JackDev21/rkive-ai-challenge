// import { useState } from "react"
import { getPosts } from "../services/getPosts"
// import { Post } from "../interfaces/posts"
import { useDispatch } from "react-redux"
import { setPosts } from "../../store/postSlice"

export const usePosts = () => {
  const dispatch = useDispatch()
  // const [posts, setPosts] = useState<Post[]>([])

  const dataPosts = async () => {
    const posts = await getPosts()
    dispatch(setPosts(posts))
  }

  return { dataPosts }
}
