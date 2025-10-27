"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useSignOut() {
  const router = useRouter();

  const handleSignout = async () => {
    try {
      await authClient.signOut();   // this already clears cookies
      toast.success("Signed out successfully");

      // navigate after successful signout
      router.push("/");
    } catch (err) {
      console.error("Error signing out:", err);
      toast.error("Error signing out, try again later");
    }
  };

  return handleSignout;
}
