import React from 'react'
import Image from 'next/image'
import {BadgeCheckIcon,CollectionIcon,HomeIcon,
    LightningBoltIcon,SearchIcon,UserIcon}
    from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon"
const Header = () => {
    return (
        <div className="header flex flex-col justify-between items-center
        
         h-auto p-5 sm:flex-row">
            <div className="header__manu  flex items-center flex-grow">
                <HeaderIcon title="HOME" Icon={HomeIcon}/>
                <HeaderIcon title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderIcon title="VERIFIDE" Icon={BadgeCheckIcon}/>
                <HeaderIcon title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderIcon title="SEARCH" Icon={SearchIcon}/>
                <HeaderIcon title="ACCOUNT" Icon={UserIcon}/>

            </div>
            <div className="header__brand__name">
               
                <Image
                 src="https://mpng.pngfly.com/20180712/ife/kisspng-logo-computer-icons-hulu-television-show-logo-letter-font-p-5b46f43d53d825.9360027515313767013434.jpg"
                 width={100}
                 height={100}
                 objectFit="contain"

                />
                 
            </div>
            
        </div>
    )
}

export default Header
