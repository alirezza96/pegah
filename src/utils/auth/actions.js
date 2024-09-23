"use server"
import z from "zod"
import { authenticate, findUser } from "./ad"
import MaskPhoneNumber from "../MaskPhoneNumber"
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
        username: formData.get("email"),
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
    console.log(1)
    try {

        const isAuthenticated = await authenticate(username, password)
        if (!isAuthenticated) {
            return {
                status: "error",
                username,
                password,
                message: "نام کاربری یا رمز عبور اشتباه است"
            }
        }
        // find user to send otp
        const user = await findUser(username)
        if (!user.telephoneNumber) {
            return {
                username,
                password,
                status: "error",
                message: "تلفن همراه یافت نشد. به مدیر سیستم تماس بگیرید"
            }
        }
        
        return {
            isVerified: true,
            status: "success",
            message: `کد تایید به شماره ${MaskPhoneNumber(user.telephoneNumber)} ارسال شد`
        }
    } catch (err) {
        console.log("catch error =>", err)
        return {
            username,
            password,
            status: "error",
            message: "نام کاربری یا رمز عبور اشتباه است"
        }
    }
    console.log(2)



}


export const verifyOTP = () => {
    console.log("action fired")
}