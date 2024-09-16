import cover from "/public/login/login.png"
import Image from "next/image"
import styled from "@/styles/box-shadow.module.css"
import Input from "@/components/modules/forms/Input"
import Submit from "@/components/modules/forms/Submit"
import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/outline"
import { login } from "@/utils/auth/actions"
export default function page() {
    return (
        <div className=" min-h-svh flex flex-col gap-4 items-center justify-center">
            <Link href="/" className="text-text">
                <HomeIcon className="w-6" />
                خانه
            </Link>
            <div className={`${styled.box_shadow} bg-accent flex items-center`}>
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
                <Image

                    src={cover}
                    height={947}
                    width={368}
                    alt="login pic"
                    className="aspect-square object-contain hidden md:block"

                />
            </div>
        </div>
    )
}