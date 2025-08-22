"use client";

import React, { useEffect } from "react";
import { useAppContext } from "@/contexts/AppContext";
import { usePathname } from "next/navigation";
import ForgotPasswordForm from "@/app/forgotpassword/page";

const ForgotPasswordWrapper: React.FC = () => {
  const { user, showUserResetPassword, setRedirectPath } = useAppContext();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && showUserResetPassword) {
      setRedirectPath(pathname);
    }
  }, [user, showUserResetPassword, pathname, setRedirectPath]);

  // Only render the form if the modal is active and user is not logged in
  if (!showUserResetPassword || user) return null;

  return <ForgotPasswordForm />;
};

export default ForgotPasswordWrapper;
