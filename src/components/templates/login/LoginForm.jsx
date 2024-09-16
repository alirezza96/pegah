"use client"
import Input from "@/components/modules/forms/Input"
import Submit from "@/components/modules/forms/Submit"
import { login } from "@/utils/auth/actions"
// import { useActionState } from "react"
export default function LoginForm() {
    const initialState = { message: null, errors: null }
    // const [formState, formAction, isPending] = useActionState(
    //     login,
    //     initialState
    // )
    return (
        <form action={login}>
            <Input
                type="text"
                label="نام کاربری"
                id="username"
                name="username"
                placeholder="username@domain"
                autoComplete={true}
                autoFocus={true}

            />
            <br />
            <Input
                type="password"
                label="رمز عبور"
                id="password"
                name="password"
                placeholder="password"
            />
            <br />
            <Submit
                value="ادامه"
            />
        </form>
    )
}