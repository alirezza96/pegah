import cover from "/public/login/login.png"
import Image from "next/image"
import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/outline"
import LoginForm from "@/components/templates/login/LoginForm"
export const metadata = {
    title: "ورود"
}
export default function page() {
    return (
        <div className=" min-h-dvh flex flex-col gap-4 items-center justify-end sm:justify-center p-4">
            <Link href="/" className="text-text">
                <HomeIcon className="w-6" />
                خانه
            </Link>
            <div className="flex items-center bg-secondary py-4 px-8 rounded-2xl border border-secondary shadow-customize">
                <LoginForm />
                <Cover />
            </div>
        </div>
    )
}

const Cover = () => (
    <Image
        src={cover}
        height={947}
        width={368}
        alt="login pic"
        className="aspect-square object-contain hidden md:block"
    />
)