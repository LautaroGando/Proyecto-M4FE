// Next
import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {

    const token = req.cookies.get("userToken")?.value;
    
    const protectedRoutes = ["/dashboard", "/cart", "/orders"];
    const authRoutes = ["/login", "/register"];

    if (!token && protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {

        return NextResponse.redirect(new URL("/", req.url));

    };

    if (token && authRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {

        return NextResponse.redirect(new URL("/", req.url));

    };

    return NextResponse.next();

};

export const config = {
    matcher: ["/dashboard", "/cart", "/orders", "/login", "/register"],
};