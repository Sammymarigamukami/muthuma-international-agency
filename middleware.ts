import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const { pathname, search } = request.nextUrl;

  // Define routes
  const protectedRoutes = ["/order"];
  const publicRoutes = [
    "/reset-password",
    "/api/auth",
    "/products",
    "/signup",
    "/login",
    "/",
    "/cart",
    "/checkout",
    "/logins",
    "/signup",
  ];

  // Allow public routes
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Handle protected routes
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !sessionCookie) {
    const redirectUrl = new URL("/", request.url);
    // Preserve both pathname and query
    redirectUrl.searchParams.set("redirect", pathname + search);
    return NextResponse.redirect(redirectUrl);
  }

  console.log("Session Cookie:", sessionCookie, "Pathname:", pathname);


  // Allow the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/mpesa/callback|api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};
