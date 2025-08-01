"use client"

import { useEffect } from "react"
import { useAppContext } from "@/contexts/AppContext"

const SessionWatcher = () => {
  const { logout } = useAppContext()

  useEffect(() => {
    const localSessionId = localStorage.getItem("sessionId")
    const mySessionId = sessionStorage.getItem("myTabSessionId")

    // If no session exists yet, create one for this tab
    if (!mySessionId) {
      const newId = Math.random().toString(36).substring(2)
      sessionStorage.setItem("myTabSessionId", newId)
      localStorage.setItem("sessionId", newId)
    }

    const handleStorageChange = () => {
      const updatedSessionId = localStorage.getItem("sessionId")
      const currentTabId = sessionStorage.getItem("myTabSessionId")

      if (updatedSessionId !== currentTabId) {
        // This tab has an outdated session → log out and redirect
        logout()
        window.location.href = "/" // redirect home
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [logout])

  return null
}

export default SessionWatcher
