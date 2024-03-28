
import React from 'react'
import Link from 'next/link'
import logo from "./../.././../public/Logo-removebg-preview.png"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-[100%] h-[70px] bg-indigo-950 bg-opacity-40 '>

        <div className='flex justify-around h-[100%]'>

            <div className='h-[100%] flex items-center'>
               <Image className='w-[80px]' src={logo} alt="" ></Image>
            </div>

            <div className='flex gap-10 items-center h-[100%] text-white'>
                <Link className={`border-b-[3px] p-3 rounded-xl hover:text-slate-800 hover:bg-cyan-300 hover:border-black`} href={"/"}>Home</Link>
                <Link className={`border-b-[3px] p-3 rounded-xl hover:text-slate-800 hover:bg-cyan-300 hover:border-black`} href={"/games"}>Games</Link>
                <Link className={`border-b-[3px] p-3 rounded-xl hover:text-slate-800 hover:bg-cyan-300 hover:border-black`} href={"/contact"}>Contact</Link>
                <Link className={`border-b-[3px] p-3 rounded-xl hover:text-slate-800 hover:bg-cyan-300 hover:border-black`} href={"/about"}>About</Link>
            </div>

            <div>
                <i>fd</i>
                <p>darkmode</p>
            </div>

        </div>
    </div>
  )
}

export default Navbar