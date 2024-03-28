import React from 'react'
import Navbar from '../components/Navbar';

// https://github.com/joshuaduffy/dota2api/blob/master/dota2api/ref/heroes.json

import Link from "next/link";



interface User {
    
   
    name: string;
    image : string
}

const UsersPage = async () => {
   const res = await fetch("https://www.freetogame.com/api/games")
   const heroes = await res.json()
    
    
  
   

   return (


    

        <div className="games w-[100%] flex flex-col items-center justify-center ">
            <Navbar/>

        
            <div className=" w-[100%] flex flex-col m-6">
                <p className="text-start font-bold text-[30px] text-green-200 ms-[200px]">HEROES</p>
                <div className="w-[100%] flex flex-wrap items-center justify-center mt-4 gap-5">
                {
                    heroes.slice(0, 20).map((element:any, key:number) => {
                        return(
                            <Link href={`/games/${key}`}  key={key} className="shadow-xl card shadow-purple-600 w-[20%] h-[300px] border-[2px] border-orange-400 rounded-md flex flex-col justify-between items-center hover:scale-110 hover:bg-cyan-300 transition">
                                <p className="text-xl text-center mt-2 text-lime-100 font-semibold">{element.title}</p>
                                <img className="h-[80%] rounded-b-md" src={element.thumbnail} alt="" />
                            </Link>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}



export default UsersPage