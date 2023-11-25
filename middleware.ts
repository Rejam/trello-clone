import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    const isAuthenticated = !!auth.userId;
    const hasOrg = !!auth.orgId;
    // authenticated but trying to access public page
    if (isAuthenticated && auth.isPublicRoute) {
      // redirect to org select
      let path = "/select-organisation";
      if (hasOrg) {
        // or org page if they have org
        path = `/organisation/${auth.orgId}`;
      }
      const url = new URL(path, req.url);
      return NextResponse.redirect(url);
    }

    // not authenticated but trying to access protected page
    if (!isAuthenticated && !auth.isPublicRoute) {
      // redirect to signin with return url back
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    const isSelectOrgPage = req.nextUrl.pathname === "/select-organisation";
    // authenticated but no org
    if (isAuthenticated && !hasOrg) {
      // if not going to select org page then redirect them to it
      if (!isSelectOrgPage) {
        const url = new URL("/select-organisation", req.url);
        return NextResponse.redirect(url);
      }
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
