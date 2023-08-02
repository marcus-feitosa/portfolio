import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image';

import ignewsIMG from '@/assets/webImages/ignews.jpg'
import igniteshopIMG from '@/assets/webImages/igniteshop.jpg'
import ignitetimerIMG from '@/assets/webImages/igniteTimer.jpg'
import ufabcnextIMG from '@/assets/webImages/ufabcnext.jpg'
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
            <Image className="rounded-md" src={ignewsIMG} width={600} height={480} alt="" placeholder='blur'/>

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>Ignite news</p>
                <p className='text-zinc-400'>Blog com pagamento de assinatura</p>
                <a href="https://github.com/marcus-feitosa/ignews"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>


            <div className="keen-slider__slide">
            <Image className="rounded-md" src={ignitetimerIMG} width={600} height={480} alt="" placeholder='blur'/>

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>Ignite Timer</p>
                <p className='text-zinc-400'>Timer com método Pomodoro</p>
                <a href="https://github.com/marcus-feitosa/pomodoro-timer"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>

            <div className="keen-slider__slide">
            <Image className="rounded-md" src={ufabcnextIMG} width={600} height={480} alt="" placeholder='blur'/>

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>Ufabc Next</p>
                <p className='text-zinc-400'>Desenvolvido por alunos, descomplicando a UFABC</p>
                <a href="https://github.com/marcus-feitosa/ufabc-next-web"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>

            <div className="keen-slider__slide">
            <Image className="rounded-md" src={igniteshopIMG} width={600} height={480} alt="" placeholder='blur'/>

                <footer className='flex flex-col items-center justify-center mt-6'>

                <p className='font-bold text-lg'>Ignite shop</p>
                <p className='text-zinc-400'>E-commerce integrado ao stripe</p>
                <a href="https://github.com/marcus-feitosa/ignite-shop"><NeonButton type='button' text='Acessar repositório'/></a>
               
                </footer>
            </div>
            
        </div>
        

    )
  }