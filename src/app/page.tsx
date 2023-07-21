import Link from 'next/link'
import { Londrina_Outline } from 'next/font/google'
import NeonButton from '@/components/NeonButton'

const londrina = Londrina_Outline({ subsets: ['latin'], weight: ['400']})
export default function Home() {
  
  return (
    <div className="h-screen bg-[url('../assets/Prancheta.png')]">
    
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className='font-bold text-8xl'>Olá, eu sou o Marcus!</h1>
      <h1 className={`${londrina.className} text-6xl`}>Desenvolvedor frontend e mobile</h1>
          <Link href="/aboutme">
          
              <NeonButton text='Sobre mim!'/>
        
          </Link>
      
    </div>
    </div>
    )
}
