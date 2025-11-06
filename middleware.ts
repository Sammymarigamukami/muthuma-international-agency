import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  // List of routes to protect
  const protectedRoutes = ["/order"];

  const publicRoutes = ["/reset-password", "/api/auth", "/signup", "/login", "/", "/cart", "/checkout", "/logins", "/signup"];

  // If it's a public route → skip all checks
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }
  // Only redirect if the user tries to access a protected route without a session
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Otherwise, allow request
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to everything EXCEPT API routes, static files, images, favicon, and callback
    "/((?!api/mpesa/callback|api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};