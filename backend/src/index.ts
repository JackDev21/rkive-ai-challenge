import express from "express"
import cors from "cors"
import "dotenv/config"
import { analyzeRouter } from "./routes/analyze"
import axios from "axios"

export interface Auth {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", analyzeRouter)

app.post("/auth", async (req, res) => {
  try {
    const response = await axios.post<Auth>(
      "https://www.reddit.com/api/v1/access_token",
      {
        grant_type: "client_credentials",
        scope: "read",
      },
      {
        auth: {
          username: "Vm91e5ks8aXtB65Bro_cFg",
          password: "jfwsec0rRfg0eli_lDdp6ZoMNBiB-w", // Credenciales "publicas" para  no agregar variables de entorno al momento y poder probar sin configurar
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

app.get("/", (req, res) => {
  res.send("Backend is running!")
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
