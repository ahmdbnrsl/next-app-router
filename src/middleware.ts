import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    /* if (request.nextUrl.pathName.startWith('/about')) {
        return NextResponse.redirect(new URL('/', request.url));
    }*/
    const isLogin = false;
    if (!isLogin) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/about/:path*']
};