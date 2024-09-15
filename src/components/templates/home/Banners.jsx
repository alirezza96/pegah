"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icons from '@heroicons/react/24/outline'


const banners = [
    { id: 1, title: "اتوماسیون اداری", alt: "automation", src: "/banners/automation.png", href: "https://poa.irandairy.ir", icon: "ComputerDesktopIcon" },
    { id: 2, title: "سامانه هوش تجاری", alt: "bi", src: "/banners/bi.png", href: "#", icon: "PresentationChartLineIcon" },
    { id: 3, title: "شماره های داخلی", alt: "contact-us", src: "/banners/contact-us.png", href: "https://irandairy.ir/a1.html", icon: "PhoneArrowUpRightIcon" },
    { id: 4, title: "ایمیل سازمانی", alt: "mail", src: "/banners/mail.png", href: "#", icon: "PaperAirplaneIcon" },
    { id: 5, title: "فروشگاه", alt: "market", src: "/banners/market.png", href: "https://pegah.ir/", icon: "ShoppingCartIcon" },
    { id: 6, title: "سایت سیاست گذاری", alt: "terms", src: "/banners/terms.png", href: "https://bi2.irandairy.ir/", icon: "BookOpenIcon" },
    { id: 7, title: "سایت گردش کار", alt: "time-clock", src: "/banners/time-clock.png", href: "http://personal.pspegah.ir:8091/", icon: "ClockIcon" },
];

export default function Banners() {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBannerIndex((prevIndex) =>
                (prevIndex + 1) % banners.length
            );
        }, 6000); // Change image every 6 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="container text-text flex flex-col sm:flex-row-reverse  gap-4">

            <div className=" relative flex-1  flex flex-col-reverse sm:flex-row gap-2 justify-center items-center sm:items-end   sm:ring sm:shadow-lg   ring-text/5 p-4 rounded-3xl ">
                <div className="absolute right-4 bottom-4 space-y-2 ring bg-primary/30  backdrop-blur-sm ring-text/5 p-4 rounded-3xl shadow-lg">
                    <Link
                        className=" inline-flex text-3xl md:text-4xl lg:text-5xl -semibold "
                        href={banners[currentBannerIndex].href}
                    >
                        {banners[currentBannerIndex].title}
                    </Link>
                    <br />
                    <Link
                        className="inline-flex bg-text text-primary px-8 py-1 rounded-xl float-left"
                        href={banners[currentBannerIndex].href}
                    >
                       کلیک کنید
                       <Icons.CursorArrowRaysIcon className="inline w-6 h-6"/>
                    </Link>
                </div>
                <Image
                    src={banners[currentBannerIndex].src}
                    // fill={true}
                    width={368}
                    height={368}
                    alt={banners[currentBannerIndex].alt}
                    className="object-contain aspect-square"
                />
            </div>

            <ul className="mt-4 text-sm flex sm:flex-col flex-wrap justify-evenly gap-4 text-center">
                {banners.map(item => {
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
        </div>

    );
}
