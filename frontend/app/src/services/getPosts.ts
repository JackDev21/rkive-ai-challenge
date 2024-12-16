import { httpClient } from "../api/axios-config"
import { Post } from "../interfaces/posts"

export const getPosts = async () => {
  try {
    const response = await httpClient.get<Post[]>("api/posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error("Failed to fetch posts")
  }
}
