'use client'
import { IconHeader } from "@/components/IconHeader";
import WebCarousel from "@/components/WebCarousel";
import MobileCarousel from "@/components/MobileCarousel";
import { useState } from "react";

export default function Projects(){
    const [isMobile, setIsMobile] = useState(true);
    return(
        <div className="h-screen ">
            <IconHeader />
            <div className="flex flex-row gap-16 justify-center mt-16">
                <button onClick={() => setIsMobile(true)}  className={`text-bold ${isMobile ? 'border-b-2 border-neon-pink' : 'border-none'}`}>Mobile</button>
                <button onClick={() => setIsMobile(false)} className={`text-bold ${isMobile ? 'border-none' : 'border-b-2 border-neon-pink'}`}>Web</button>
            </div>
            {isMobile ? <MobileCarousel /> : <WebCarousel />}
        </div>
    )
}