import { IconHeader } from "@/components/IconHeader";
import NeonButton from "@/components/NeonButton";

export default function ContactForm(){
    return(
        <>
        <IconHeader />
        <div className="flex flex-row items-center justify-center h-screen gap-2 space-x-96 -mt-16">
            <div className="flex flex-col gap-4 w-96">

            <label className="-mb-4">Nome</label>
            <input type="text" className="flex flex-1 w-full p-2 rounded-md bg-transparent border-2 border-neon-pink"/>
            
            <label className="-mb-4">E-mail</label>
            <input type="email" className="flex flex-1 w-full p-2 rounded-md bg-transparent border-2 border-neon-pink"/>

            <label className="-mb-4">Mensagem</label>
            <div className="h-auto">
            <textarea className=" no-resize appearance-none block w-full bg-transparent text-white border-2 border-neon-pink rounded py-3 px-4 mb-3 leading-tight h-48 resize-none" id="message"></textarea>
            </div>
            
            <NeonButton text="Enviar mensagem"/>

            </div>
            <div>
            <p>Redes sociais</p>
            </div>
        </div>
        </>
    )
}