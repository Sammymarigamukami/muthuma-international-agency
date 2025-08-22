"use client";

import React, { useEffect } from "react";
import { useAppContext } from "@/contexts/AppContext";
import { usePathname } from "next/navigation";

// Import the modal wrappers
import LoginWrapper from "./loginWrappers";
import SignupWrapper from "./signupWrapper";
import ForgotPasswordWrapper from "./forgotpasswordwrapper";

const AuthWrapper: React.FC = () => {
  const {
    user,
    showUserLogin,
    showUserSignup,
    showUserResetPassword,
    setRedirectPath,
    closeAuth,
  } = useAppContext();

  const pathname = usePathname();

  // Save the current path to redirect after login/signup
  useEffect(() => {
    if (!user && (showUserLogin || showUserSignup || showUserResetPassword)) {
      setRedirectPath(pathname);
    }
  }, [user, showUserLogin, showUserSignup, showUserResetPassword, pathname, setRedirectPath]);

  // Nothing to show if no modal is active
  if (!showUserLogin && !showUserSignup && !showUserResetPassword) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/50"
      onClick={closeAuth} // clicking outside closes any modal
    >
      <div
        className="w-full max-w-md"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Render the active modal */}
        {showUserLogin && <LoginWrapper />}
        {showUserSignup && <SignupWrapper />}
        {showUserResetPassword && <ForgotPasswordWrapper />}
      </div>
    </div>
  );
};

export default AuthWrapper;

