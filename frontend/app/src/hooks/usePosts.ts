import { useState } from "react"
import { httpClient } from "../api/axios-config"

interface Post {
  title: string
  ups: number
  commentsCount: number
  datePosted: number
  sentiment: string
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])

  const getPosts = async () => {
    try {
      const response = await httpClient.get<Post[]>("/api/posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      setPosts(response.data)
    } catch (error) {
      throw new Error("Failed to fetch posts")
    }
  }

  return { posts, getPosts }
}
