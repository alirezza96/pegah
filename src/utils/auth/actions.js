"use server"
import z from "zod"
import { authenticate, findUser, searchUser } from "./ad"
const loginSchema = z.object({
    username: z.
        string()
        .trim()
        .email("نام کاربری معتبر نیست.")
    , password: z
        .string()
        .trim()
        .min(4, "رمز عبور بیشتر از 4 حرف")

})
export const login = async (prevState, formData) => {
    const data = {
        username: formData.get("username"),
        password: formData.get("password")
    }
    // 1. Validate form fields
    const validationResult = loginSchema.safeParse(data)
    // If any form fields are invalid, return early
    if (!validationResult.success) {
        return {
            message: "لطفا مواردی که مشخص شده را تکمیل کنید",
            status: "error",
            errors: validationResult.error.flatten().fieldErrors,
            username: data.username,
            password: data.password
        }
    }

    // 2. Prepare data for insertion into database
    const { username, password } = validationResult.data
    try {
        // const res = await authenticate(username, password)
        // const user = await findUser("aghanbari")
        const user = await searchUser("aghanbari")
        console.log("user =>", user)
        return {
            message: "کد تایید به شماره 091259***25 ارسال شد"
            , status: "success"
            , isVerified: true
        }

    } catch (err) {
        console.log("err =>", err)
        return {
            message: "نام کاربری یا رمز عبور اشتباه است.",
            status: "error",
            username,
            password
        }
    }




}


export const verifyOTP = () => {
    console.log("action fired")
}