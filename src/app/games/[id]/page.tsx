import React from 'react'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'

async function getCards() {
    const res = await fetch("https://www.freetogame.com/api/games")

    return res.json()
}

type Props ={
    params:{id:number}
}

export default async function cardDetail({params}:Props) {


    const cards =  await getCards()
    const card = cards
    const id = params.id

    

  return (
    <div className='w-[100%] h-screen bg-red-200 flex flex-col gap-14'>
        <Navbar/>
        <Link href={'/games'} className='p-2'>
            <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Hover Me
            </button>
        </Link>
        <div className='w-[100%] flex justify-center items-center gap-9'>
            <p>Details</p>
            <p>{id}</p>
        </div>

        <div className='flex justify-around items-center'>
            <p>{card[id].title}</p>
            <img src={card[id].thumbnail} alt="" />
        </div>

    </div>
  )
}