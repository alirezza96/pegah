"use server"
import z from "zod"
import { authenticate, findUser } from "./ad"
import MaskPhoneNumber from "../MaskPhoneNumber"
import generateRandomCode from "../generateRandomCode"
import { findOtp, insertOtp } from "@/scripts/otp"
import { redirect } from "next/navigation"

// Login schema for validation
const loginSchema = z.object({
    username: z.string().trim().email("نام کاربری معتبر نیست."),
    password: z.string().trim().min(4, "رمز عبور بیشتر از 4 حرف")
})

// Login action
export const login = async (prevState, formData) => {
    const data = {
        username: formData.get("email"),
        password: formData.get("password")
    }

    // 1. Validate form fields
    const validationResult = loginSchema.safeParse(data)
    if (!validationResult.success) {
        return {
            message: "لطفا مواردی که مشخص شده را تکمیل کنید",
            status: "error",
            errors: validationResult.error.flatten().fieldErrors,
            username: data.username,
            password: data.password
        }
    }

    const { username, password } = validationResult.data
    try {
        // Authenticate user via Active Directory
        const isAuthenticated = await authenticate(username, password)
        if (!isAuthenticated) {
            return {
                status: "error",
                username,
                password,
                message: "نام کاربری یا رمز عبور اشتباه است"
            }
        }

        // Find user's phone number to send OTP
        const user = await findUser(username)
        if (!user.telephoneNumber) {
            return {
                username,
                password,
                status: "error",
                message: "تلفن همراه یافت نشد. به مدیر سیستم تماس بگیرید"
            }
        }

        // Send OTP via SMS
        const maskedPhone = MaskPhoneNumber(user.telephoneNumber)
        await sendOTP(user.telephoneNumber) // This function needs to interact with Kavenegar API
        return {
            isVerified: true,
            status: "success",
            message: `کد تایید به شماره ${maskedPhone} ارسال شد`,
            phoneNumber: user.telephoneNumber
        }
    } catch (err) {
        return {
            username,
            password,
            status: "error",
            message: "نام کاربری یا رمز عبور اشتباه است"
        }
    }
}

// OTP verification action
const otpSchema = z.object({
    otp: z
        .string()
        .length(5, "کد باید 5 کاراکتر باشد"),
    phoneNumber: z
        .string()
        .length(11, "شماره تلفن باید 11 کاراکتر باشد")

})
export const verifyOTP = async (prevState, formData) => {
    const otp = [
        formData.get("otp1"),
        formData.get("otp2"),
        formData.get("otp3"),
        formData.get("otp4"),
        formData.get("otp5"),
    ].join("")
    const phoneNumber = formData.get("phoneNumber")
    const validationResult = otpSchema.safeParse({ otp, phoneNumber })
    if (!validationResult.success) {
        return {
            status: "error",
            message: validationResult.error.errors[0].message,
            otp
        }
    }
    const reqCode = validationResult.data.otp
    // Here, you can add logic to validate OTP using an external service or database
    const dbResponse = await findOtp(phoneNumber)
    const dbCode = dbResponse?.code
    if (dbCode !== reqCode) return {
        status: "error",
        message: "کد تایید اشتباه است",
    }
    redirect("/")
}

// OTP sending function (example)
const sendOTP = async (phoneNumber) => {
    const otp = generateRandomCode(5)
    const response = await fetch(`https://api.kavenegar.com/v1/${process.env.SMS_TOKEN}/verify/lookup.json?receptor=${phoneNumber}&token=${otp}&template=otp`)
    if (response.status !== 200) {
        return {
            status: "error",
            message: "با خطا مواجه شد"
        }
    }
    await insertOtp(phoneNumber, otp)
}
