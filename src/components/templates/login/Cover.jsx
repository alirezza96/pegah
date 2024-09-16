"use client"
import { useState } from 'react';
import Image from 'next/image';
import cover from "/public/login/login.png"
export default function Cover() {
    const [loaded, setLoaded] = useState(false);
    return (
        <Image
            src={cover}
            height={947}
            width={368}
            alt="login pic"
            className={`aspect-square object-contain hidden md:block  ${loaded ? 'blur-none' : 'blur-sm'}`}
            onLoad={() => setLoaded(true)}
        />
    )
}