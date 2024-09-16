import { NavLink } from "@/components/modules/forms/Buttons"
import db from "@/db.json"
import Profile from "./Profile"


export default function Navbar() {

    return (
        <nav className="bg-text text-primary leading-10 font-secondary">
            <div className="container flex justify-between">
                <ul className="flex gap-2 sm:gap-4 ">
                    {
                        db.navbar?.map(item => (
                            <li key={item.id}>
                                <NavLink href={item.href}>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
                <Profile />

            </div>
        </nav>

    )
}

