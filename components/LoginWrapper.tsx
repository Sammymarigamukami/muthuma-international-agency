// components/LoginWrapper.tsx
"use client";

import React, { useEffect } from "react";

import { useAppContext } from "@/contexts/AppContext";
import Login from "@/app/Login/page";
import { usePathname } from "next/navigation";

const LoginWrapper: React.FC = () => {
  const { user, showUserLogin, setRedirectPath} = useAppContext();
  const pathname = usePathname()
  useEffect(() => {
    if (!user && showUserLogin) {
        setRedirectPath(pathname)
    }
  }, [user, showUserLogin, pathname, setRedirectPath])

  if(!showUserLogin || user) return null

  return <Login />

};

export default LoginWrapper;
