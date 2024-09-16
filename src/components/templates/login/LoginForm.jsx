"use client"
import Input from "@/components/modules/forms/Input"
import Submit from "@/components/modules/forms/Submit"
import Notification from "@/components/modules/Notification"
import { login } from "@/utils/auth/actions"
import { useActionState } from "react"
export default function LoginForm() {
    const initialState = { message: null, status: null, errors: null, username: null, password: null }
    const [formState, formAction, isPending] = useActionState(
        login,
        initialState
    )
    console.log("formState =>", formState)
    return (
        <form action={formAction} className="min-w-80">
            <Input
                type="email"
                label="نام کاربری"
                id="username"
                name="username"
                defaultValue={formState?.username}
                placeholder="username@domain.com"
                autoComplete={true}
                autoFocus={true}
                className="w-full"

            />
            {
                formState?.errors &&
                < Notification title={formState.errors?.username} status={formState.status} />
            }

            <Input
                type="password"
                label="رمز عبور"
                id="password"
                name="password"
                defaultValue={formState?.password}
                placeholder="password"
                className="w-full"

            />
            {
                formState?.errors &&
                < Notification title={formState.errors?.password} status={formState.status} />
            }
            {
                formState?.message &&
                <Notification title={formState.message} status={formState.status} />
            }
            <Submit
                value="ادامه"
                disabled={isPending}
            />
        </form>
    )
}