import React from 'react'

const HeaderIcon = ({title,Icon}) => {
    return (
        <div className="header__icon flex flex-col items-center group cursor-pointer
         w-12 sm:w-20   m-2 sm:m-0">
            <Icon className="h-6 pb-1 group-hover:animate-bounce"/>
            <p className="opacity-0  group-hover:opacity-100 ">{title}</p>
        </div>
    )
}

export default HeaderIcon
