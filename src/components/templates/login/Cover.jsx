"use client"
import { useState } from 'react';
import Image from 'next/image';
import cover from "/public/login/login.png"
export default function Cover() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className='relative h-[368] w-[368]'>

            <Image
                src={cover}
                height={368}
                width={368}
                alt="login pic"
                className={`aspect-square object-contain hidden md:block  ${loaded ? 'blur-none' : 'blur-sm'}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}