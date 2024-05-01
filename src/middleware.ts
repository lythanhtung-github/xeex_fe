"use client";

import { NextResponse, type NextRequest } from "next/server";
import { useState } from "react";

export default function Middleware(request: NextRequest) {
  if (checkAuthentication(request)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //https://dev.to/brainiacneit/authentication-with-middlewares-in-nextjs-279p
}

export const config = {
  matcher: ["/register/:path*"]
};

function checkAuthentication(request: NextRequest): boolean {
  const accessToken = request.cookies.get("access_token");
  return !accessToken;
}
