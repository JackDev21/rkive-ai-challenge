import { Request, Response, NextFunction } from "express"

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  try {
    if (!token) {
      throw new Error("Unauthorized")
    }
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: "Unauthorized" })
  }
}
