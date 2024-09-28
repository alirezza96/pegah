"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { encrypt, decrypt } from "../lib"
import { revalidatePath } from "next/cache"

const cookie = {
    name: "session",
    options: {
        httpOnly: true,
        secure: true,
        path: "/"
    },
    duration: 60 * 60 * 1000
}


const setCookie = (session) => {
    const expires = new Date(Date.now() + cookie.duration)
    cookies().set(cookie.name, session, { ...cookie.options, expires })

}


export const createSession = async (data) => {
    const session = await encrypt({ ...data });
    setCookie(session)

};


export const verifySession = async () => {
    const payload = await getPayload()
    if (!payload) redirect("/login")
    return payload
}


export const updateSession = async () => {
    const payload = await getPayload()
    if (!payload) return false
    setCookie(payload)
}

export const deleteSession = () => {
    cookies().delete(cookie.name)
    revalidatePath("/")
}

export const getPayload = async () => {
    const session = cookies().get(cookie.name)?.value
    const payload = await decrypt(session)
    return payload
}