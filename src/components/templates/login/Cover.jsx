"use client"
import { useState } from 'react';
import Image from 'next/image';
export default function Cover() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className='relative h-[368] w-[368] hidden md:block'>

            <Image
                src="/login/login.png"
                height={368}
                width={368}
                alt="login pic"
                className={`aspect-square object-contain   ${loaded ? 'blur-none' : 'blur-sm'}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}