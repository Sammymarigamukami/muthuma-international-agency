// components/LoginWrapper.tsx
"use client";

import React, { useEffect } from "react";

import { useAppContext } from "@/contexts/AppContext";
import { usePathname } from "next/navigation";
import { SignupForm } from "@/app/signup/page";

const SignupWrapper: React.FC = () => {
  const { user, showUserLogin, setRedirectPath} = useAppContext();
  const pathname = usePathname()
  useEffect(() => {
    if (!user && showUserLogin) {
        setRedirectPath(pathname)
    }
  }, [user, showUserLogin, pathname, setRedirectPath])

  if(!showUserLogin || user) return null

  return <SignupForm />

};

export default SignupWrapper;
