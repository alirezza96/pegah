"use client"
import Input from "@/components/modules/forms/Input"
import Submit from "@/components/modules/forms/Submit"
import Notification from "@/components/modules/Notification"
import { login } from "@/utils/auth/actions"
import { useActionState } from "react"
export default function OtpForm
    () {
    const initialState = { message: null, status: null, errors: null, username: null, password: null }
    const [formState, formAction, isPending] = useActionState(
        login,
        initialState
    )
    console.log("formState =>", formState)
    return (
        <form action={formAction} className="min-w-80">
            <div className="flex gap-1 bg-accent justify-center my-1">
                <input
                    type="text"
                    min="0"
                    max="9"
                    maxLength="1"
                    inputMode="numeric"
                    required
                    autoFocus
                    className="w-8 h-8 text-center  p-1 rounded-md   focus:outline-text"
                />
                <input
                    type="text"
                    min="0"
                    max="9"
                    maxLength="1"
                    inputMode="numeric"
                    required
                    className="w-8 h-8 text-center  p-1 rounded-md   focus:outline-text"
                />
                <input
                    type="text"
                    min="0"
                    max="9"
                    maxLength="1"
                    inputMode="numeric"
                    required
                    className="w-8 h-8 text-center  p-1 rounded-md   focus:outline-text"
                />
                <input
                    type="text"
                    min="0"
                    max="9"
                    maxLength="1"
                    inputMode="numeric"
                    required
                    className="w-8 h-8 text-center  p-1 rounded-md   focus:outline-text"
                />
                <input
                    type="text"
                    min="0"
                    max="9"
                    maxLength="1"
                    inputMode="numeric"
                    required
                    className="w-8 h-8 text-center  p-1 rounded-md   focus:outline-text"
                />
            </div>
            {
                formState?.errors &&
                < Notification title={formState.errors?.password} status={formState.status} />
            }
            <Submit
                value="ادامه"
                disabled={isPending}
            />
            {
                formState?.message &&
                <Notification title={formState.message} status={formState.status} />
            }

        </form>
    )
}