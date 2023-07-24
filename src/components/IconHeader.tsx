import Link from "next/link";
import { Home, User2, Code2, FileText, Phone} from 'lucide-react';

export function IconHeader(){
    return(
       
        <div className="flex justify-center">
            
            <div className="mt-8 flex flex-row gap-2 ">
                <Link href={"/"} className="text-white   hover:text-zinc-600">
                    <Home size={36}/>
                </Link>

                <Link href={"/aboutme"} className="text-white   hover:text-zinc-600">
                    <User2 size={36} />
                </Link>

                <Link href={"/myprojects" }className="text-white   hover:text-zinc-600">
                    <Code2 size={36}/>
                </Link>

                <Link href={"https://drive.google.com/file/d/1wxW4ghTCqUvwV7I1p22ZldJ54Cfe95VJ/view?usp=sharing"} className="text-white   hover:text-zinc-600">
                    <FileText size={36}/>
                </Link>

                <Link href={"/forms"} className="text-white   hover:text-zinc-600">
                    <Phone size={36}/>
                </Link>
            </div>
        </div>
      
    )
}