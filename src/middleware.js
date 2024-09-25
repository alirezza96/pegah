import { NextResponse } from "next/server"
import { getPayload } from "./utils/auth/session"

export default async function middleware(request) {
    console.log("run middleware!")
    const isVerified = await getPayload()
    if (isVerified) return NextResponse.redirect(new URL("/", request.url))
}


export const config = {
    matcher: ["/login"]
}