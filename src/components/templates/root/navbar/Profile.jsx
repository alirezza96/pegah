import { UserCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
export default function Profile() {
    const session = null
    return (
        <div className="relative group">
            {
                session ? (
                    <>
                        <UserCircleIcon className="w-6 h-full" />
                        <div className="bg-text absolute top-12  left-0 p-4 rounded-3xl min-w-max z-50
               invisible hidden group-hover:visible group-hover:block delay-150 transition-all">
                            <ul>
                                <li>پروفایل</li>
                                <li>خروج از حساب کاربری</li>
                            </ul>
                        </div>
                    </>
                )
                    : <Link href="/login">ورود</Link>
            }
        </div>
    )
}