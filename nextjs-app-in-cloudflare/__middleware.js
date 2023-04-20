import { NextResponse } from "next/server";

export async function middleware(req) {
  const response = NextResponse.next();
  response.cookies.set("testo", "testo");
  response.headers.set("x-testo", "testo")
  return response;
}
 