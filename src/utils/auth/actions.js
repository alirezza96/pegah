"use server"
import z from "zod"
import authenticate from "../ad"
const loginSchema = z.object({
    username: z.
        string()
        .trim()
        .email("نام کاربری معتبر نیست.")
    , password: z
        .string()
        .trim()
        .min(4, "رمز عبور خود را وارد کنید.")

})
export const login = (prevState, formData) => {
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

    // console.log("data =>", data)
    // console.log("validationResult =>", validationResult)
}