import { SignJWT, jwtVerify } from "jose";


const secretKey = process.env.PRIVATE_KEY
const key = new TextEncoder().encode(secretKey)
const encode = Buffer.from(key, "utf-8")


export const encrypt = async (payload) => {
    try {
        return new SignJWT(payload)
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("1h")
            .sign(encode)
    } catch (error) {
        console.error("failed to encrypt =>", error)
    }
}

export const decrypt = async (session) => {
    try {
        const { payload } = await jwtVerify(session, encode, {
            algorithms: ["HS256"]
        })
        return payload
    } catch (error) {
        return false
    }
}

