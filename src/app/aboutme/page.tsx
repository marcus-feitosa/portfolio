
import { IconHeader } from "@/components/IconHeader"

import ProfileIMG from '@/assets/ProfilePic.svg'
import Image from "next/image"
import NeonButton from "@/components/NeonButton"
import Link from "next/link"



export default function AboutMe(){
    return(
       <div className="h-screen">

        <IconHeader />

        <div className="flex flex-1 justify-center mt-32 gap-8">
    
            <div className="flex flex-col justify-center">
            <p className="text-6xl font-bold mb-4">Sobre mim</p>
            <p className="max-w-2xl">
                Olá, seja muito bem vindo ao meu portifólio! Meu nome é Marcus, tenho 20 anos e atuo 
                como desenvolvedor front-end e mobile. Meu foco está no desenvolvimento de soluções
                utilizando Kootlin, React Native e React.js, porém, estou sempre aberto a explorar novas 
                tecnologias!
            </p>    
            <Link href="/myprojects">
                <NeonButton type='button' text="Projetos"/>
            </Link>
                
            </div>
            {/*texto e botão */}
            <Image src={ProfileIMG} alt="Foto de perfil"/>
        </div>

       </div>
    )
}