'use client'

import Link from "next/link";
import { Home, User2, Code2, FileText, Phone} from 'lucide-react';
import { usePathname } from "next/navigation";

export function IconHeader(){
    const pathname = usePathname();

    return(
       
        <div className="flex justify-center">
            
            <div className="mt-8 flex flex-row gap-2 ">
                <Link href={"/"}  className={`${pathname == "/" ? "text-neon-pink" : "text-white "}   hover:text-zinc-600`}>
                    <Home size={36}/>
                </Link>

                <Link href={"/aboutme"} className={`${pathname == "/aboutme" ? "text-neon-pink" : "text-white "}   hover:text-zinc-600`}>
                    <User2 size={36} />
                </Link>

                <Link href={"/myprojects"} className={`${pathname == "/myprojects" ? "text-neon-pink" : "text-white "}   hover:text-zinc-600`}>
                    <Code2 size={36}/>
                </Link>

                <Link href={"https://drive.google.com/file/d/1042OUZIEZqjDxy_8dmLJzADRM6FbW8KM/view?usp=sharing"} className="text-white   hover:text-zinc-600">
                    <FileText size={36}/>
                </Link>

                <Link href={"/forms"} className={`${pathname == "/forms" ? "text-neon-pink" : "text-white "}   hover:text-zinc-600`}>
                    <Phone size={36}/>
                </Link>
            </div>
        </div>
      
    )
}