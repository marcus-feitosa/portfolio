'use client'
import { IconHeader } from '@/components/IconHeader';
import {useForm} from 'react-hook-form'

import {toast} from 'react-toastify'
import NeonButton from '@/components/NeonButton';

import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import emailjs from '@emailjs/browser'
import SocialMediaIcons from '@/components/SocialMediaIcons';
import { useState } from 'react';

const sendMessageSchemaForm = z.object({
    nome: z.string().nonempty('Preencha o nome'),
    email: z.string().nonempty('O email é obrigatório').email('Formatação de e-mail invalida').toLowerCase(),
    mensagem: z.string().nonempty('Preencha a mensagem')
})

type SendMessageFromData = z.infer<typeof sendMessageSchemaForm>


export default function ContactForm(){
    
    const {register, handleSubmit, formState:{errors}, getValues, reset} = useForm<SendMessageFromData>({
        resolver: zodResolver(sendMessageSchemaForm)
    });

    const [isLoading, setIsLoading] = useState(false);

    async function getTemplateParams(){
        setIsLoading(true);
        const templateParams = {
            from_name: getValues('nome'),
            email: getValues('email'),
            message: getValues('mensagem')
        }
       await emailjs.send("service_j6cg3k4", "template_dizskgf", templateParams, "gTS-EweYnCD6GOe5g").then(() => toast.success('Enviado com sucesso'))
       reset()
       setIsLoading(false);
    }

    return(

        <>
        <IconHeader />
        <div className="flex flex-row items-center justify-center h-screen gap-2 space-x-96 ">
            <form onSubmit={handleSubmit(getTemplateParams)}>
            <div className="flex flex-col gap-6 w-96">

            
                <label className="-mb-4 font-bold">Nome</label>
                <input type="text" placeholder='Digite seu nome' {...register('nome')}  className="flex flex-1 w-full p-2 rounded-md bg-transparent border-2 border-neon-pink"/>
                {errors.nome && <span className='-mt-4  text-zinc-300'>{errors.nome.message}</span>}

                <label className="-mb-4 font-bold">E-mail</label>
                <input type="text" placeholder='Digite seu email' {...register('email')} className="flex flex-1 w-full p-2 rounded-md bg-transparent border-2 border-neon-pink"/>
                {errors.email && <span className='-mt-4  text-zinc-300'>{errors.email.message}</span>}

                <label className="-mb-4 font-bold">Mensagem</label>
                <div className="h-auto">
                <textarea placeholder='Digite sua mensagem...' {...register('mensagem')}  className="no-resize appearance-none block w-full bg-transparent text-white border-2 border-neon-pink rounded py-3 px-4 mb-3 leading-tight h-48 resize-none" id="message"></textarea>
                {errors.mensagem && <span className='-mt-4  text-zinc-300'>{errors.mensagem.message}</span>}
                </div>
                
            </div>
                <NeonButton text="Enviar mensagem" type='submit' isDisabled={isLoading}/>
            </form>
            <div className='flex flex-col items-center gap-2'>
            <p>Redes sociais</p>
            <SocialMediaIcons />
            </div>
        </div>
        </>
    )
}