import { useState } from "react"
import { getPosts } from "../services/getPosts"
import { Post } from "../interfaces/posts"

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])

  const dataPosts = async () => {
    const posts = await getPosts()
    setPosts(posts)
  }

  return { posts, dataPosts }
}
