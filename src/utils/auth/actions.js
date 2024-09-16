"use server"
import z from "zod"
const loginSchema = z.object({
    username: z.
        string()
        .trim()
        .min(8, "بیشتر از 8 حرف باشد")
        .regex(/^[a-zA-Z0-9._%+-]+@bgr(-sh(\.local)?)?$/, "نام کاربری نامعتبر است.")
    , password: z
        .string()
        .trim()
        .min(1, "رمز عبور خود را وارد کنید")

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

    // console.log("data =>", data)
    // console.log("validationResult =>", validationResult)
}