import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Middleware triggered for:", req.nextUrl.pathname);
  
  // Example: Redirect if not authenticated (Modify as needed)
  const authToken = req.cookies.get("auth_token");
  if (!authToken && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Define routes where middleware should be applied
export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware only to /dashboard routes
};
