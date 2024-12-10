import { useEffect } from "react"
import { Dashboard } from "./components/Dashboard"

import { AuthContext } from "./context/authContext"
import { useContext } from "react"

function App() {
  const { login } = useContext(AuthContext)
  useEffect(() => {
    login()
  }, [])

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
