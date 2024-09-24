import { sql } from "@vercel/postgres";

export const insertOtp = async (phoneNumber, code) => {
    try {
        const data = await sql`
            INSERT INTO otp(code, phone_number)
            VALUES(${code}, ${phoneNumber})
        `
        return data
    } catch (error) {
        console.error("insertOtp err =>", error)
        throw new Error("Database failed to insert otp")
    }
}

export const findOtp = async (phoneNumber) => {
    try {
        const data = await sql`
        SELECT max(expired_date) as expired_date, phone_number, code 
            from public.otp 
            where phone_number=${phoneNumber}
            group by phone_number , code 
            having max(expired_date) > now()
        `
        return data.rows[0]
    } catch (error) {
        console.error("findOtp err =>", error)
        throw new Error("Database failed to read otp")
    }
}