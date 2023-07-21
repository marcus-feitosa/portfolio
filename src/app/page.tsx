import Link from 'next/link'
import { Londrina_Outline } from 'next/font/google'

const londrina = Londrina_Outline({ subsets: ['latin'], weight: ['400']})
export default function Home() {
  
  return (
    <div className="h-screen bg-[url('../assets/Prancheta.png')]">
    
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className='font-bold text-8xl'>Olá, eu sou o Marcus!</h1>
      <h1 className={`${londrina.className} text-6xl`}>Desenvolvedor frontend e mobile</h1>
          <Link href="/aboutme">
          
            <button className="mt-8 w-80 px-4 py-2 text-neon-pink font-bold rounded-xl border-2 border-neon-pink shadow-neon-pink group hover:border-pink-900 hover:text-zinc-600">
              Sobre mim!
            </button>
        
          </Link>
      
    </div>
    </div>
    )
}
