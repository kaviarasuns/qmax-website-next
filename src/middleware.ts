import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle redirects for all paths ending with .html
  // This covers:
  // - /contact.html -> /contact
  // - /embedded-design-services.html -> /embedded-design-services
  // - /pcb-design.html -> /pcb-design
  // - /Embedded-Case-study.html -> /Embedded-Case-study
  // - /PCB-Design-Case-study.html -> /PCB-Design-Case-study
  // - /case-studies/some-slug.html -> /case-studies/some-slug
  // - Any other page with .html extension
  if (pathname.endsWith('.html')) {
    // Remove the .html extension
    const newPath = pathname.slice(0, -5);
    
    // Create the new URL
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    
    // Return a permanent redirect (308 is the SEO-friendly replacement for 301)
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// Optionally, you can define a matcher to only run this middleware on specific paths
// to improve performance. However, checking `endsWith` is very fast.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};