import Link from "next/link";
import * as Icons from '@heroicons/react/24/outline'
export default function Menus ({banners}){
    return (
        <ul className="mt-4 text-sm flex sm:flex-col flex-wrap justify-evenly gap-4 text-center">
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