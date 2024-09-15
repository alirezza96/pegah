import { NavLink } from "@modules/Buttons"
import db from "@/db.json"

export default function Navbar() {
    return (
        <nav className="bg-text text-primary">
            <div className="container py-2">
                <ul className="flex gap-4 font-secondary">
                    {
                        db.links?.map(link => (
                            <li key={link.id}>
                                <NavLink href={link.href}>
                                    {link.title}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </nav>

    )
}

