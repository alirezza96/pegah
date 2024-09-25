
import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/outline"
import Form from "@/components/templates/login/Form"
import Cover from "@/components/templates/login/Cover"
export const metadata = {
    title: "ورود"
}
export default  function page() {
    return (
        <div className=" min-h-dvh flex flex-col gap-4 items-center justify-end sm:justify-center p-4">
            <Link href="/" className="text-text">
                <HomeIcon className="w-6" />
                خانه
            </Link>
            <div className="flex items-center bg-secondary py-4 px-8 rounded-2xl border border-secondary shadow-customize">
                <Form />
                <Cover />
            </div>
        </div>
    )
}
