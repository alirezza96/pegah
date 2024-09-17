"use client"
import Input from "@/components/modules/forms/Input"
import Submit from "@/components/modules/forms/Submit"
import Notification from "@/components/modules/Notification"
import { login, verifyOTP } from "@/utils/auth/actions"
import { useActionState, useRef } from "react"
export default function Form() {
    const initialState = {
        message: null,
        status: null,
        isVerified: false,
        errors: null,
        username: null,
        password: null,
        phoneNumber: null,
        otp: null
    }
    const [formState, formAction, isPending] = useActionState(
        login,
        initialState
    )
    return (
        <div className="w-80">
            {
                !formState?.isVerified ?
                    <Login formState={formState} formAction={formAction} isPending={isPending} />
                    :
                    <Otp formState={formState} />
            }
        </div>
    )
}

const Login = ({ formState, formAction, isPending }) => {
    return (
        <form
            action={formAction}
        >
            <Input
                type="email"
                label="نام کاربری"
                id="username"
                name="username"
                defaultValue={formState?.username}
                placeholder="username@domain.com"
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
                minLength="4"

            />
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

const Otp = ({ formState, formAction, isPending }) => {
    const inputRefs = useRef([])
    const moveToNext = (e, index) => {
        const value = e.target.value
        if (/^[0-9]/.test(value) && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus()
        }
    }
    console.log("formaction =>", formAction)
    return (
        <>
            <button>
                بازگشت
            </button>
            <form
                action={formAction}
            >
                {
                    formState?.message &&
                    <Notification title={formState.message} status={formState.status} />
                }
                <div className="flex flex-row-reverse gap-1 justify-center my-1">

                    {
                        [...Array(5)].map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                min="0"
                                max="9"
                                maxLength="1"
                                inputMode="numeric"
                                required
                                autoFocus={index === 0}
                                className="w-8 h-8 text-center  p-1 rounded-md   focus:outline-text"
                                onInput={(e) => moveToNext(e, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                            />
                        ))
                    }
                </div>
                {
                    formState?.errors &&
                    < Notification title={formState.errors?.password} status={formState.status} />
                }

                <Submit
                    value="ادامه"
                    disabled={isPending}
                />


            </form>
        </>
    )
}