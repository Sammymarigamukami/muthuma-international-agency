"use client"

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"

// User type
interface User {
  id: string
  username: string
  token: string
}

// Context type
interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  showUserLogin: boolean
  setShowUserLogin: (show: boolean) => void
  redirectPath: string
  setRedirectPath: (path: string) => void
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider props
interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showUserLogin, setShowUserLogin] = useState<boolean>(false)
  const [redirectPath, setRedirectPath] = useState("")

  // Check sessionStorage on load
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

useEffect(() => {
  if (user) {
    const sessionId = Date.now().toString(); // Generate a unique session ID using current timestamp
    localStorage.setItem("sessionId", sessionId); // Store it in localStorage (shared across all tabs)
    sessionStorage.setItem("myTabSessionId", sessionId); // Store it in sessionStorage (specific to this tab)
  }
}, [user]);

  // Login function
  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      const response = await new Promise<{ success: boolean; data?: User }>((resolve) => {
        setTimeout(() => {
          if (username === "testuser@gmail.com" && password === "password123") {
            const loggedInUser: User = {
              id: "123",
              username: "testuser@gmail.com",
              token: "fake-jwt-token-123",
            }
            resolve({ success: true, data: loggedInUser })
            setShowUserLogin(false)
          } else {
            resolve({ success: false })
          }
        }, 1000)
      })

      if (response.success && response.data) {
        setUser(response.data)
        sessionStorage.setItem("user", JSON.stringify(response.data))
        setIsLoading(false)
        return true
      } else {
        alert("Invalid credentials!")
        setUser(null)
        sessionStorage.removeItem("user")
        setIsLoading(false)
        return false
      }
    } catch (error) {
      console.error("Login error:", error)
      alert("An error occurred during login.")
      setUser(null)
      sessionStorage.removeItem("user")
      setIsLoading(false)
      return false
    }
  }

  // Logout function
const logout = () => {
  // Start loading state (optional)
  setIsLoading(true)

  // Clear user and session data
  setUser(null)
  sessionStorage.removeItem("user")
  sessionStorage.removeItem("myTabSessionId")
  localStorage.removeItem("sessionId")

  // End loading state
  setIsLoading(false)
}

  return (
    <AuthContext.Provider value={{ 
        user,
        isLoading, 
        login, 
        logout, 
        setShowUserLogin, 
        showUserLogin, 
        redirectPath, 
        setRedirectPath }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook
export const useAppContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AuthProvider")
  }
  return context
}
