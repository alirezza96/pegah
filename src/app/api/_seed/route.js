import { db } from "@vercel/postgres"
const client = await db.connect()

async function seedOtp(params) {
    await client.sql`DROP TABLE IF EXISTS otp`;
    await client.sql`
    CREATE TABLE otp (
        code CHAR(5),
        phone_number CHAR(11),
        release_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expired_date TIMESTAMP DEFAULT (CURRENT_TIMESTAMP + INTERVAL '2 minutes')
    )
    `;
}


export async function GET() {
    try {
        await client.sql`BEGIN`
        await seedOtp()
        await client.sql`COMMIT`
        return Response.json({ message: "Database seeded successfully" })
    } catch (error) {
        await client.sql`ROLLBACK`
        return Response.json({ error: error.message }, { status: 500 })
    }
}