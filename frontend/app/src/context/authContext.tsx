import { createContext } from "react"
import { useState } from "react"
import { httpClient } from "../api/axios-config"

interface AuthContextType {
  token: null | string
  login: () => Promise<void>
}

export interface Auth {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<null | string>(null)

  const login = async () => {
    try {
      const response = await httpClient.post<Auth>("/auth")

      localStorage.setItem("token", response.data.access_token)

      setToken(response.data.access_token)
    } catch (error) {
      throw new Error("Error al obtener token")
    }
  }

  return <AuthContext.Provider children={children} value={{ token, login }} />
}
