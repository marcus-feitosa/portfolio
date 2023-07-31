import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image';

import dailydietIMG from '@/assets/mobileImages/dailydiet.svg'
import igniteteams from '@/assets/mobileImages/igniteteams.svg'
import marketspaceIMG from '@/assets/mobileImages/marketspace.svg'
import todoIMG from '@/assets/mobileImages/todo.svg'
import ignitegymIMG  from '@/assets/mobileImages/ignitegym.jpg'
import NeonButton from './NeonButton';



  export default function WebCarousel(){
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: 'precision',
        slides: {
          perView: 3,
          spacing: 48,
        }
      });

    return(
        <div ref={sliderRef} className="keen-slider mt-8">
            
            <div className="keen-slider__slide">
            <Image className="rounded-md" src={igniteteams} width={600} height={480} alt="" />

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>Ignite Teams</p>
                <p className='text-zinc-400'>Junte a galera para jogar!</p>
                <a href="https://github.com/marcus-feitosa/ignite-teams"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>


            <div className="keen-slider__slide">
            <Image className="rounded-md" src={dailydietIMG} width={600} height={480} alt="" />

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>Daily Diet</p>
                <p className='text-zinc-400'>Gerencie suas refeições e mantenha a dieta</p>
                <a href="https://github.com/marcus-feitosa/dailydiet"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>

            <div className="keen-slider__slide">
            <Image className="rounded-md" src={ignitegymIMG} width={600} height={480} alt="" />

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>Ignite Gym</p>
                <p className='text-zinc-400'>Tenha seus treinos na palma da mão!</p>
                <a href="https://github.com/marcus-feitosa/ignitegym"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>

            {/* AINDA FALTA CRIAR O REPOSITÓRIO*/}
            <div className="keen-slider__slide">
            <Image className="rounded-md" src={marketspaceIMG} width={600} height={480} alt="" />

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>Marketspace</p>
                <p className='text-zinc-400'>Compra e venda de itens novos e usados</p>
                <a href="https://github.com/marcus-feitosa/ufabc-next-web"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>

            <div className="keen-slider__slide">
            <Image className="rounded-md" src={todoIMG} width={600} height={480} alt="" />

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>To-Do</p>
                <p className='text-zinc-400'>Gerenciador de Tarefas</p>
                <a href="https://github.com/marcus-feitosa/to-do-mobile"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>

            
            
            
        </div>
        

    )
  }