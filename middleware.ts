import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(
  (_auth, _req) => {
    // Clerk auth middleware checks
  },
  { debug: false }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/chat"],
};
