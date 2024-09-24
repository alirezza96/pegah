"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { SignJWT, jwtVerify } from "jose"
const secretKey = process.env.PRIVATE_KEY
const key = new TextEncoder().encode(secretKey)
