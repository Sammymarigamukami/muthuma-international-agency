// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
  const response = NextResponse.json({ success: true });

  // Clear the cookies
  response.cookies.set("better-auth.session_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    path: "/",
    expires: new Date(0), // expire immediately
  });

  response.cookies.set("better-auth.session_token.sig", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    path: "/",
    expires: new Date(0),
  });

  return response;
}