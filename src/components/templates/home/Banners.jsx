"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const banners = [
    { id: 1, title: "اتوماسیون اداری", alt: "automation", src: "/banners/automation.png", href: "https://poa.irandairy.ir" },
    { id: 2, title: "سامانه هوش تجاری", alt: "bi", src: "/banners/bi.png", href: "#" },
    { id: 3, title: "شماره های داخلی", alt: "contact-us", src: "/banners/contact-us.png", href: "https://irandairy.ir/a1.html" },
    { id: 4, title: "ایمیل سازمانی", alt: "mail", src: "/banners/mail.png", href: "#" },
    { id: 5, title: "فروشگاه", alt: "market", src: "/banners/market.png", href: "https://pegah.ir/" },
    { id: 6, title: "سایت سیاست گذاری", alt: "terms", src: "/banners/terms.png", href: "https://bi2.irandairy.ir/" },
    { id: 7, title: "سایت گردش کار", alt: "time-clock", src: "/banners/time-clock.png", href: "http://personal.pspegah.ir:8091/" },
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

        <div className="relative mx-auto max-w-fit">

            <Image
                src={banners[currentBannerIndex].src}
                // fill={true}
                width={368}
                height={368}
                alt={banners[currentBannerIndex].alt}
                className="object-contain aspect-square"
            />
            <div className="absolute bottom-10 left-1/2 min-w-max text-left space-y-4 bg-theme/10 p-4 rounded-3xl backdrop-blur-sm ring ring-text/5 shadow-lg">
                <Link
                    className="inline-flex text-4xl font-semibold text-text"
                    href={banners[currentBannerIndex].href}
                >
                    {banners[currentBannerIndex].title}
                </Link>
                <br />
                <Link
                    className="inline-flex bg-text text-primary px-8 py-1 rounded-xl"
                    href={banners[currentBannerIndex].href}
                >
                    ورود
                </Link>
            </div>
        </div>

    );
}
