import { useRouter } from 'next/dist/client/router'
import React from 'react'
import   requests  from '../utils/requests'

const Nav = () => {
    const router=useRouter()
    return (
        <div className="nav flex text-center items-center  text-xl px-10 sm:px-20 overflow-x-scroll   whitespace-nowrap 
        space-x-10 sm:space-x-20 scrollbar-hide">
            {
                Object.entries(requests).map(([key,{title,url}])=>{
                    console.log(title)
                    return (
                        <h2 
                        onClick={()=>router.push(`/?genre=${key}`)}
                        className=" text-white  last:pr-4  transform hover:scale-125  cursor-pointer  transition-all ease-in-out duration-100" key={key}>{title}</h2>
                        
                    )
                })
            }
            
        </div>
    )
}

export default Nav
