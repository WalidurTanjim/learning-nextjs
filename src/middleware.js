import { NextResponse } from 'next/server'

export function middleware(request) {
    const dummyUserData = {
        role: 'user',
        email: 'admin@admin.com'
    }

    const currentCookie = request.cookies.get('next-token');
    console.log(currentCookie.value);

    const isMealsPage = request?.nextUrl?.pathname.startsWith('/meals');
    let isAdmin = dummyUserData?.role === 'admin';
    if(isMealsPage && !isAdmin) return NextResponse.rewrite(new URL('/sign-in', request.url));

    return NextResponse.next()
}