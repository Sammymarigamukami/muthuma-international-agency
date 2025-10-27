"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { createAuthClient } from "better-auth/react"
import { signIn } from "@/server/user"

// Create a singleton instance of the Better Auth client
const authClient = createAuthClient()

// User type (add all the properties you expect from your database)
interface User {
  id: string
  username: string
}

// Context type
interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: typeof authClient.signOut
  showUserLogin: boolean
  setShowUserLogin: (show: boolean) => void
  redirectPath: string
  setRedirectPath: (path: string) => void
  closeAuth: () => void;
  showUserSignup: boolean | undefined
  setShowUserSignup: (show: boolean) => void
  showUserResetPassword: boolean;       
  setShowUserResetPassword: (show: boolean) => void; 
}

// Create context
const AppContext = createContext<AuthContextType | undefined>(undefined)

// AppProvider props
interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Get the refetch function from the useSession hook
  const { data: user, isPending: isLoading, refetch } = authClient.useSession()

  const [showUserLogin, setShowUserLogin] = useState<boolean>(false)
  const [redirectPath, setRedirectPath] = useState("")
  const [showUserSignup, setShowUserSignup] = useState<boolean>(false)
  const [showUserResetPassword, setShowUserResetPassword] = useState<boolean>(false);


  const closeAuth = () => {
    setShowUserLogin(false)
    setShowUserSignup(false)
    setShowUserResetPassword(false);
  }

  const logout = authClient.signOut

  // Custom login function that calls your server action
   const login = async (email: string, password: string) => {
    try {
      const result = await signIn(email, password)

      if (result.success) {
        await refetch()
      }
      return result
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, message: "An unexpected error occurred." }
    }
  }

  const value = {
    user: user as User | null,
    isLoading,
    login,
    logout,
    showUserLogin,
    setShowUserLogin,
    redirectPath,
    setRedirectPath,
    closeAuth,
    showUserSignup,
    setShowUserSignup,
    showUserResetPassword,
    setShowUserResetPassword,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}