"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
    { id: 1, alt: "automation", src: "/banners/automation.jpg" },
    { id: 2, alt: "bi", src: "/banners/bi.jpg" },
    { id: 3, alt: "contact-us", src: "/banners/contact-us.jpg" },
    { id: 4, alt: "mail", src: "/banners/mail.jpg" },
    { id: 5, alt: "market", src: "/banners/market.jpg" },
    { id: 6, alt: "terms", src: "/banners/terms.jpg" },
    { id: 7, alt: "time-clock", src: "/banners/time-clock.jpg" },
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
        <div>
            <Image
                src={banners[currentBannerIndex].src}
                fill={true}
                alt={banners[currentBannerIndex].alt}
                className="object-cover aspect-[16/9] -z-20"
            />
            <div className="bg-[#000] absolute inset-0 opacity-40 -z-10"></div>
        </div>
    );
}
