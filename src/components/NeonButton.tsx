type ButtonProps ={
    text:string
}

export default function NeonButton({text}:ButtonProps){
    return(
        <button className="mt-8 w-80 p-4 text-neon-pink font-bold rounded-xl border-2 border-neon-pink shadow-neon-pink group hover:border-pink-700 hover:text-pink-700">
              {text}
        </button>
    )
}