"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavLink = ({ href, children }) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={`rounded-xl px-2 ${pathname === href ? "bg-theme" : ""}`}
        >
            {children}
        </Link>
    )
}