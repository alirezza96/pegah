"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline'
export default function Banners({ banners }) {
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
        <div className=" relative flex-1  flex flex-col-reverse sm:flex-row gap-2 justify-center items-center sm:items-end   sm:ring sm:shadow-lg   ring-text/5 p-4 rounded-3xl ">
            <div className="absolute right-4 bottom-4 space-y-2 glass-box">
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
                    <CursorArrowRaysIcon className="inline w-6 h-6" />
                </Link>
            </div>
            <Image
                src={banners[currentBannerIndex].src}
                width={368}
                height={368}
                alt={banners[currentBannerIndex].alt}
                className="object-contain aspect-square"
            />
        </div>
    )
}