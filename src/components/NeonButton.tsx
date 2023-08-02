type ButtonProps ={
    text:string
    type: 'submit'| 'button'
    isDisabled?: boolean
}

export default function NeonButton({text,type, isDisabled}:ButtonProps){
    return(
        <button type={type} disabled={isDisabled} className="mt-8 w-80 p-4 text-neon-pink font-bold rounded-xl border-2 border-neon-pink shadow-neon-pink group hover:border-pink-700 hover:text-pink-700 disabled:text-zinc-400 disabled:border-zinc-400 disabled:shadow-transparent">
              {text}
        </button>
    )
}