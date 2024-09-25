import { sql } from "@vercel/postgres";

export const insertOtp = async (username, code) => {
    try {
        const data = await sql`
            INSERT INTO otp(code, username)
            VALUES(${code}, ${username})
        `
        return data
    } catch (error) {
        console.error("insertOtp err =>", error)
        throw new Error("Database failed to insert otp")
    }
}

export const findOtp = async (username) => {
    try {
        const data = await sql`
          SELECT code
            FROM otp
            WHERE username = ${username}
            AND expired_date > NOW()
            ORDER BY release_date DESC
            LIMIT 1;
        `
        return data.rows[0]
    } catch (error) {
        console.error("findOtp err =>", error)
        throw new Error("Database failed to read otp")
    }
}