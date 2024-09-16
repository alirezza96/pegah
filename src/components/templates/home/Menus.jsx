import Link from "next/link";
import * as Icons from '@heroicons/react/24/outline'
export default function Menus({ banners }) {
    return (
        <ul className="text-sm flex sm:flex-col flex-wrap  gap-6 text-center">
            {banners?.map(item => {
                const Icon = Icons[item.icon]
                return (
                    <li key={item.id}
                    >
                        <Link href={item.href}
                            className="group flex flex-col sm:flex-row  items-center gap-2 "
                        >
                            <Icon className="w-8 h-8 sm:w-6 sm:h-6 group-focus:fill-secondary" />
                            {item.title}
                        </Link>
                    </li>
                )
            }
            )}
        </ul>
    )
}