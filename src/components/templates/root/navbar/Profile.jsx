// profile.jsx
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Submit from "@/components/modules/forms/Submit";
import { getPayload } from "@/utils/auth/session";
import { deleteSession } from "@/utils/auth/session";

export default async function Profile() {
    const session = await getPayload();

    return (
        <div className="relative group">
            {session ? (
                <>
                    <UserCircleIcon className="w-6 h-full" />
                    <div className="profile-menu bg-text absolute top-12 left-0 p-4 rounded-3xl min-w-max z-50
               invisible opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                        <ul className="cursor-pointer">
                            <li>
                                <Link href="/dashboard">
                                    داشبورد
                                </Link>
                            </li>
                            <li>
                                <form action={deleteSession} method="post">
                                    <Submit value="خروج از حساب کاربری" />
                                </form>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (
                <Link href="/login">ورود</Link>
            )}
        </div>
    );
}

