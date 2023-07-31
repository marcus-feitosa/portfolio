'use client'

import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon} from 'lucide-react';
import { usePathname } from "next/navigation";
export default function SocialMediaIcons(){

    const pathname = usePathname();

    return(
       
        <div className="flex justify-center">
            
            <div className="flex flex-row gap-2 ">
                <Link href={"https://twitter.com/mrcsfts"}  className="text-neon-pink hover:text-zinc-600">
                    <TwitterIcon size={24}/>
                </Link>

                <Link href={"https://instagram.com/marcusvf_?igshid=OGQ5ZDc2ODk2ZA=="} className="text-neon-pink  hover:text-zinc-600">
                    <InstagramIcon size={24} />
                </Link>

                <Link href={"https://www.linkedin.com/in/marcus-vinicius-feitosa-61b2b21b9/"} className="text-neon-pink hover:text-zinc-600">
                    <LinkedinIcon size={24}/>
                </Link>

                <Link href={"https://github.com/marcus-feitosa"} className="text-neon-pink   hover:text-zinc-600">
                    <GithubIcon size={24}/>
                </Link>
            </div>
        </div>
      
    )
}
