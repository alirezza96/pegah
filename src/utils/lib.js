import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.PRIVATE_KEY
const key = new TextEncoder().encode(secretKey)

export const encrypt = async (payload) => {
    try {
        return new SignJWT(payload)
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("1h")
            .sign(key)
    } catch (error) {
        console.error("failed to encrypt =>", error)
    }
}

export const decrypt = async (session) => {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ["HS256"]
        })
        return payload
    } catch (error) {
        console.error("failed to decrypt =>", error)
        return null
    }
}

const cookie = {
    name: "session",
    options: {
        httpOnly: true,
        secure: true,
        path: "/"
    },
    duration: 60 * 60 * 1000
}

export const setCookie = (session) => {
    const expires = new Date(Date.now() + cookie.duration)
    cookies().set(cookie.name, session, { ...cookie.options, expires })
}